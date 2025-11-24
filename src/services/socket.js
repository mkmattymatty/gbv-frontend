// frontend/src/services/socket.js
import { io } from 'socket.io-client';

const SOCKET_URL =
  (process.env.REACT_APP_API_URL && process.env.REACT_APP_API_URL.replace('/api', '')) ||
  'http://localhost:5000';

// create one socket instance for the app, but don't auto-connect
const socket = io(SOCKET_URL, {
  autoConnect: false,
  transports: ['websocket', 'polling'],
});

export default socket;
