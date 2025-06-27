# 🌐 React Website – USTS Solution

A modern, responsive contact form built using **React**, **Vite**, and **Three.js**, integrated with **EmailJS** to send form submissions directly via email — no backend required!

---

## 🚀 Live Demo

🔗 Visit the live website: [https://ustsoman.com](https://ustsoman.com)

---

## 📌 Features

✅ Form validation (Name, Email, Message)  
✅ Email delivery using EmailJS  
✅ Loading state management with success/failure alerts  
✅ Fully responsive and mobile-friendly  
✅ Developed with Vite for lightning-fast performance  
✅ Beautiful visuals enhanced with **Three.js**

---

## ⚙️ Tech Stack

- **Frontend Framework:** React  
- **Build Tool:** Vite  
- **3D Graphics & Effects:** Three.js  
- **Email Service:** EmailJS  
- **Hosting:** Deployed on a custom domain via a hosting provider

---

## 📁 Environment Variables

This project uses environment variables to securely store your EmailJS credentials.

Create a `.env` file in the root directory and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TO_EMAIL=receiver@example.com
VITE_EMAILJS_TO_NAME=ReceiverName
