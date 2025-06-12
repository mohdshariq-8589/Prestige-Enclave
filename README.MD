# Prestige Enclave

## 🏘️ Overview
**Prestige Enclave** is a full-featured real estate web application built using the MERN stack, designed to facilitate property listing, search, and management. It offers seamless user experience for buyers, sellers, and admins with robust Firebase-based authentication and image storage integration.

## 🚀 Features
- 🔐 **User Authentication** (Sign up, Login, Google Auth)
- 🏡 **Add & Manage Listings** (Create, Edit, Delete properties)
- 🔍 **Advanced Property Search** (By location, type, price, etc.)
- 🖼️ **Image Uploads with Firebase Storage**
- 📊 **Admin Dashboard** (View and manage all listings/users)
- 📱 **Responsive UI** (Optimized for mobile and desktop)
- ❤️ **Favorites/Wishlist System**
- 📩 **Contact Form** (For property inquiries)

## 🛠 Tech Stack (MERN + Firebase)
- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication & Storage:** Firebase (Auth + Storage)
- **Routing:** React Router DOM
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## 📦 Installation Guide

### ⚙️ Prerequisites
- Node.js and npm installed
- MongoDB Atlas account
- Firebase project setup (for Auth & Storage)

### 📁 Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/prestige-enclave.git
   cd prestige-enclave
   ```

2. **Install Dependencies**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../client
     npm install
     ```

3. **Configure Environment Variables**

   **Backend (`backend/.env`):**
   ```env
   PORT=5000
   MONGO=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

   **Frontend (`client/.env`):**
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   ```

4. **Run the App**
   - Start Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Start Frontend:
     ```bash
     cd ../client
     npm run dev
     ```

   Access the app at `http://localhost:5173`

## 👨‍💼 User Roles
- **Visitor:** Browse properties, view details
- **Authenticated User:** Create & manage listings, save favorites
- **Admin:** Manage users, listings, and site content

## 🔐 Security
- Firebase Authentication (Google Sign-In supported)
- Secure API routes with middleware checks
- Input validation and error handling

## 🔮 Future Enhancements
- Razorpay or Stripe payment integration
- Chat system for buyers and sellers
- Map-based property search (Google Maps API)
- Push notifications using Firebase Cloud Messaging
- Real-time updates using Socket.io

## 📸 Screenshots
*Coming soon...*