https://gbv-frontend.vercel.app

GBV Support App
A web application to provide support, resources, and safety planning tools for survivors of gender-based violence (GBV). Built with MERN stack (MongoDB, Express, React, Node.js) and includes a live support chat interface (Haven AI) with safe comment storage.


Features
User Authentication: Register and login securely with JWT tokens.

Safety Plans: Create and manage personal safety plans.

Resources: Access curated GBV support resources.

Community Comments: Leave comments that are securely stored in the database.

Haven AI Chat: AI-powered guidance interface (read-only for safety; comments saved securely).

Journal: Personal private journaling for logged-in users.

Responsive Design: Works across desktop and mobile devices.

Tech Stack
Frontend: React, React Router, Tailwind CSS, Framer Motion, Axios

Backend: Node.js, Express, MongoDB, Mongoose, Socket.IO

Authentication: JWT

Deployment:

Frontend: Vercel

Backend: Render

Other: Lucide React icons, environment variables via .env

Installation
Backend
Clone the repository:
bash

git clone https://github.com/mkmattymatty/gbv-backend.git
cd gbv-backend

Install dependencies:
bash
npm install

Create a .env file with the following variables:
env
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
FRONTEND_URL=<your-frontend-url>
NODE_ENV=production
OPENAI_API_KEY=<your-openai-key> # optional if using AI features

Run the backend locally:
bash
Run the backend locally:



Frontend
Clone the repository:
bash
git clone https://github.com/mkmattymatty/gbv-frontend.git
cd gbv-frontend

Install dependencies:
bash
npm install

Create a .env file:
bash
REACT_APP_API_URL=<your-backend-url>/api

Start the frontend:
bash
npm start


Deployment
Frontend: Deploy via Vercel
Backend: Deploy via Render

Usage
Visit the landing page and register for a new account.

Login to access your dashboard, resources, safety planning, and journal.

Open the Haven AI chat via the floating icon for guidance.

Leave comments in the chat interface if logged in; guests can read messages but cannot send.


Folder Structure
gbv-support-app/
├─ backend/
│  ├─ src/
│  │  ├─ routes/
│  │  ├─ models/
│  │  ├─ config/
│  │  └─ server.js
│  ├─ .env
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ context/
│  │  ├─ pages/
│  │  ├─ services/
│  │  └─ App.jsx
│  ├─ .env
│  └─ package.json
└─ README.md


Notes


Comments Safety: Comments are stored securely in MongoDB but live chat is disabled to prevent sharing sensitive information.

Environment Variables: Make sure REACT_APP_API_URL points to your deployed backend.

Socket.IO: Used for potential chat features; currently the AI chat is static with typing animation.


Author
Mathias Mwaro
Full-Stack Developer | MERN Stack

License
This project is licensed under the MIT License.
