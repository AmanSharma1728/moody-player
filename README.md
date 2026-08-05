# 🎵 Moody Player – Emotion-Based Music Recommendation System

Moody Player is a full-stack MERN web application that recommends songs based on the user's facial emotions. The application uses FaceAPI.js to detect emotions through the webcam and suggests songs accordingly. Music files are stored and delivered using ImageKit, providing fast and reliable media access.

---

## ✨ Features

- Detects facial emotions in real time using FaceAPI.js.
- Recommends songs based on the detected emotion.
- Uploads and serves songs using ImageKit.
- Responsive and user-friendly interface built with React.
- REST API communication between frontend and backend.

---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript
- FaceAPI.js
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Multer
- ImageKit SDK

---

## 👨‍💻 My Contributions

- Developed the frontend using React.
- Developed backend APIs using Node.js and Express.js.
- Integrated MongoDB for application data management.
- Integrated FaceAPI.js for real-time facial emotion detection.
- Integrated ImageKit for cloud-based music storage and delivery.
- Designed and integrated REST APIs for seamless communication between the frontend and backend.

---

## 📡 API Endpoints

### Get Songs by Mood

```http
GET /songs?mood=happy
```

Returns songs matching the detected emotion.

### Upload Songs

```http
PUT /songs
```

Uploads a song with an associated mood tag.

---

## 🚀 Installation

### Backend

```bash
cd server
npm install
```

Create a `.env` file and add your ImageKit credentials.

```env
IK_PUBLIC_KEY=your_public_key
IK_PRIVATE_KEY=your_private_key
IK_URL_ENDPOINT=your_url_endpoint
```

Start the server.

```bash
node app.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Place the FaceAPI.js models inside:

```
public/models
```

---

## 📂 Project Architecture

```
Client (React)
        │
        │ Axios
        ▼
Node.js + Express REST API
        │
        ├── MongoDB
        └── ImageKit Cloud Storage
```

---

## 🎯 Learning Outcomes

- Built a full-stack MERN application.
- Worked with real-time facial emotion detection using FaceAPI.js.
- Integrated third-party cloud storage using ImageKit.
- Designed REST APIs for frontend-backend communication.
- Improved understanding of API integration and media management.

---

## 📜 License

This project is developed for learning and portfolio purposes.
