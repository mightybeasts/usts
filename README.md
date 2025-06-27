# 🌐 USTS Contact Form

A modern, responsive contact form built with React and integrated with [EmailJS](https://www.emailjs.com/) to send form submissions directly via email—no backend required!

## 🚀 Live Demo

🔗 Visit the live site here: [https://ustsoman.com](https://ustsoman.com)

---

## 📌 Features

- ✅ Form validation (Name, Email, Message)
- ✅ Email delivery using EmailJS
- ✅ Loading state management
- ✅ Clean UX with success/failure alerts
- ✅ Fully responsive and production-ready

---


## ⚙️ Tech Stack

- **Frontend**: React
- **Email Service**: EmailJS
- **Hosting**: Deployed on a custom domain via hosting provider

---

## 📁 Environment Variables

This project uses environment variables for secure integration with EmailJS.

Create a `.env` file in the root directory and add:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_TO_EMAIL=receiver@example.com
EMAILJS_TO_NAME=ReceiverName
