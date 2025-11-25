// frontend/src/pages/SupportCommunity.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import ContactSection from "../components/ContactSection";
import { useAuth } from "../context/AuthContext";

const SupportCommunity = () => {
  const { user } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const messagesEndRef = useRef(null);

  const fetchComments = useCallback(async () => {
    try {
      const res = await api.get("/comments");
      setComments(res.data || []);
      scrollToBottom();
    } catch (err) {
      console.error("Failed to load comments:", err);
    }
  }, []);

  useEffect(() => {
    fetchComments();
    const iv = setInterval(fetchComments, 15000);
    return () => clearInterval(iv);
  }, [fetchComments]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    setError("");
    const trimmed = comment.trim();
    if (trimmed.length < 3) {
      setError("Comment must be at least 3 characters.");
      return;
    }
    if (trimmed.length > 5000) {
      setError("Comment too long (max 5000).");
      return;
    }

    try {
      setSending(true);
      const payload = { text: trimmed, username: user?.username || user?.email || "Anonymous" };
      const res = await api.post("/comments", payload);
      setComments((prev) => [...prev, res.data]);
      setComment("");
      scrollToBottom();
    } catch (err) {
      console.error("Send failed:", err);
      setError(err.response?.data?.error || "Failed to send comment.");
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/comments/${id}`);
      setComments((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = async (id) => {
    try {
      if (!editingText.trim()) return;
      const res = await api.patch(`/comments/${id}`, { text: editingText });
      setComments((prev) => prev.map((c) => (c._id === id ? res.data : c)));
      setEditingId(null);
      setEditingText("");
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
      >
        Support Community (Comments)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-600 mb-6"
      >
        Share your experiences or thoughts. Comments are saved securely to our database.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Comments column */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow h-auto">
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Leave a comment
            </label>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={4}
              placeholder={user ? "Share something..." : "Please login to comment."}
              disabled={!user}
              className="w-full p-3 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSend}
              disabled={!user || sending}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-60"
            >
              {sending ? "Sending..." : "Post Comment"}
            </button>

            {!user && (
              <span className="text-sm text-gray-500 ml-2">
                Login to post — your identity is private to us.
              </span>
            )}
          </div>

          <hr className="my-4 border-gray-200 dark:border-gray-700" />

          {/* Comments display */}
          <div className="space-y-3 overflow-y-auto max-h-96 p-1">
            {comments.length === 0 && (
              <div className="text-sm text-gray-500">No comments yet — be the first.</div>
            )}

            {comments.map((c) => (
              <motion.div
                key={c._id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className={`p-3 rounded ${
                  c.username === user?.username
                    ? "bg-purple-100 dark:bg-purple-800"
                    : "bg-gray-50 dark:bg-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                    {c.username || "Anonymous"}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-400">
                      {new Date(c.createdAt).toLocaleString()}
                    </div>

                    {c.username === user?.username && (
                      <>
                        {/* Edit button */}
                        <button
                          onClick={() => {
                            setEditingId(c._id);
                            setEditingText(c.text);
                          }}
                          className="text-blue-600 text-xs hover:underline"
                        >
                          Edit
                        </button>

                        {/* Delete button */}
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="text-red-600 text-xs hover:underline"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {editingId === c._id ? (
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="flex-1 p-2 border rounded"
                    />
                    <button
                      onClick={() => handleEdit(c._id)}
                      className="bg-blue-600 text-white px-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-400 text-white px-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-800 dark:text-gray-100 whitespace-pre-wrap mt-1">
                    {c.text}
                  </div>
                )}
              </motion.div>
            ))}

            <div ref={messagesEndRef} />
          </div>
        </div>

        <div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default SupportCommunity;
