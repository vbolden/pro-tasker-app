# **📝 ProTasker — Project Management App**

A modern full-stack project management application built with the **MERN stack (MongoDB, Express, React, Node.js)**. ProTasker helps users create, manage, and track projects with a clean, responsive dashboard UI.

---

## **🚀 Features**

* 🔐 User authentication (JWT-based)  
* 📁 Create, update, and delete projects
* ✅ Create, updata, and delete tasks for each individual project  
* 📊 Dashboard with project overview  
* 📅 Calendar integration for scheduling  
* 📈 Progress tracking with visual indicators  
* 🧩 Responsive UI for desktop, tablet, and mobile  
* ⚡ Fast API with Express \+ MongoDB  
* 🎯 Modular React component architecture

---

## **🛠️ Tech Stack**

**Frontend**

* React.js  
* React Router DOM  
* Axios  
* React Calendar  
* React Circular Progressbar  
* CSS3 (custom styling)

**Backend**

* Node.js  
* Express.js  
* MongoDB \+ Mongoose  
* JSON Web Tokens (JWT)  
* bcrypt.js

---

## **📁 Project Structure**

Protasker/
    ├── backend/
    │   ├── config/
    │   ├── models/
    │   ├── routes/
    │   ├── utils/
    │   └── server.js
    └── frontend/
        └── src/
            ├── api/
            ├── assets/
            ├── pages/
            ├── routes/
            ├── App.css
            ├── App.jsx
            ├── index.css
            └── main.jsx
---

## **⚙️ Installation & Setup**

### **1\. Clone the repository**

git clone https://github.com/your-username/protasker.git  
cd protasker  
---

### **2\. Backend Setup**

cd backend  
npm install

Create `.env` file:

MONGO\_URI=your\_mongodb\_connection  
JWT\_SECRET=your\_secret\_key  
PORT=3003

Run backend:

npm run dev  
---

### **3\. Frontend Setup**

cd frontend  
npm install  
npm run dev  
---

## **🌐 API Endpoints**

### **Projects**

| Method | Endpoint | Description |
| ----- | ----- | ----- |
| GET | /projects | Get all projects |
| POST | /projects | Create new project |
| PUT | /projects/:id | Update project |
| DELETE | /projects/:id | Delete project |

---

## **📈 Key Features Breakdown**

### **📊 Dashboard**

Displays project count and task progress using visual components.

### **📁 Projects Management**

Users can create, edit, and delete projects dynamically with instant UI updates.

---

### **📱 Responsive Design**

Fully responsive layout optimized for mobile, tablet, and desktop screens.

---

## **🧠 Learning Outcomes**

This project demonstrates:

* Full-stack MERN architecture  
* REST API design  
* JWT authentication flow  
* React component-based UI design  
* State management with hooks  
* Responsive CSS grid/flex layouts

---

## **📌 Future Improvements**

[] Real-time collaboration  
[] Notifications system  
[] Dark mode toggle  
[] Advanced filtering & search  
[] Role-based access control
[] Overall status tracking
[] Schedules and upcoming events displayed using React Calendar


---

## **👨‍💻 Author**

**Valerie Bolden**

* GitHub: https://github.com/vbolden

---

## **📄 License**

Copyright (c) 2026 Valerie Bolden. All Rights Reserved.
