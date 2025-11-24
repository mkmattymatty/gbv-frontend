// frontend/src/components/ContactSection.jsx
import React from "react";
import {
  Mail,
  Phone,
  Github,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  MessageCircle,
  Heart
} from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl mt-6 mb-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-700 dark:text-purple-300">
        Thank You for Reaching Out
      </h2>

      <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
        We hope you have enjoyed our services. Please feel free to comment or collaborate with us.
      </p>

      {/* Contact List */}
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <Mail />
          <a href="mailto:mattymatty9372@gmail.com" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            mattymatty9372@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Phone />
          <a href="https://wa.me/254796604050" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            WhatsApp: 0796604050
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Github />
          <a href="https://github.com/mkmattymatty" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            github.com/mkmattymatty
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Facebook />
          <a href="https://www.facebook.com/Lodwar.Jnr" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            Facebook: Lodwar.Jnr
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Youtube />
          <a href="http://www.youtube.com/@MathiasMwaro" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            YouTube: Mathias Mwaro
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Youtube />
          <a href="https://www.youtube.com/@actionaidinternationaltheg6520" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            YouTube: ActionAid
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Instagram />
          <a href="https://www.instagram.com/rmeliosh/?hl=en" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            Instagram
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Twitter />
          <a href="https://x.com/mati_mwaro" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            X (Twitter)
          </a>
        </div>

        <div className="flex items-center gap-3">
          <MessageCircle />
          <a href="https://www.tiktok.com/@matty_full_stackdev" target="_blank" rel="noreferrer" className="hover:text-purple-600">
            TikTok
          </a>
        </div>
      </div>

      <p className="text-center text-purple-700 dark:text-purple-300 mt-8 text-lg font-semibold">
        THANK YOU! <Heart className="inline ml-1" />
      </p>
    </div>
  );
}
