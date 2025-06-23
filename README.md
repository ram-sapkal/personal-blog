# 📝 Personal Blog Platform

A full-stack blog platform built with the **MERN stack** (MongoDB, Express.js, React/Next.js, Node.js). Users can sign up, log in, create blog posts, and view blogs posted by others.

## 📦 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS (v3)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS, responsive mobile-first design
- **Icons**: Lucide React Icons
- **Animations**: Framer Motion (for modal transitions)

---

## ✨ Features

- 🔐 User authentication (Sign Up / Log In)
- 🪪 JWT-based session handling
- 🖼️ Create, Read blog posts
- ✍️ Posts are sorted with **latest first**
- 🧵 Author-wise blog filtering
- 🎨 Responsive UI across all screen sizes
- 🔍 Author ID filtering with search icon
- 🌙 Password toggle visibility with eye icons
- 📤 Easy GitHub-ready project structure

---

## 📁 Project Structure

```bash
personal-blog/
├── client/         # Frontend (Next.js)
├── backend/         # Backend (Express.js)
└── README.md
```

---

## ⚙️ Setup Instructions

### ✅ Prerequisites
- Node.js (v18 or above)
- MongoDB (local or Atlas) 
- Git

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```
---

## Update .env file in backend/:

 - PORT=5000
 - MONGO_URI=your_mongodb_connection_string
 - JWT_SECRET=your_secret_key

---

## Start the backend server:
```bash
npm run dev 
```
API runs on 👉 http://localhost:5000

## 💻Frontend Setup:

```bash
# 1. Navigate to client directory
cd client

# 2. Install dependencies
npm install

## 3. (Optional) If Tailwind CSS v4 was installed mistakenly:
npm uninstall tailwindcss
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

## Update tailwind.config.js:
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---
## Run the frontend development server
```bash
npm run dev
```
Visit 👉 http://localhost:3000

## ✅ How to Run Locally

```bash
# Terminal 1 - Start Backend
cd backend
npm run dev

# Terminal 2 - Start Frontend
cd client
npm run dev
```

## 🙋‍♂️ Author
- Ram Jagnnath Sapkal
- [Github: ram-sapkal](https://github.com/ram-sapkal)

