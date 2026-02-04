# **🎵 Moody Player: AI-Powered Adaptive Streaming**

**Moody Player** is a next-gen music streaming application that bridges **Artificial Intelligence** and **Cloud Computing**. It leverages client-side computer vision (TensorFlow-based) to perform real-time emotion inference, dynamically serving high-fidelity audio streams from a cloud CDN based on the user's current mood.

## **⚡ Technical Highlights**

* **🧠 Real-Time Inference:** Uses face-api.js (built on TensorFlow.js) to detect micro-expressions directly in the browser with zero latency.  
* **📡 Cloud-Native Streaming:** Integrates with **ImageKit** for scalable object storage and low-latency global content delivery.  
* **🚀 Efficient Data Pipeline:** Backend utilizes **Multer memory storage** to handle high-throughput file buffering without disk I/O bottlenecks.  
* **🔗 RESTful Architecture:** Built on a decoupled Node.js/Express API communicating via **Axios** for robust client-server data exchange.

## **🛠️ Tech Stack**

### **Frontend (Client)**

* **React.js (Vite)** – High-performance component-based UI.  
* **face-api.js** – Deep learning models for facial recognition.  
* **Axios** – Promise-based HTTP client for API communication.  
* **Remix Icons** – Vector-based iconography.

### **Backend (Server)**

* **Node.js & Express** – Event-driven, non-blocking I/O runtime.  
* **Multer** – Middleware for handling multipart/form-data in RAM.  
* **ImageKit SDK** – Enterprise-grade media management and storage.

## **🚀 Quick Start**

### **1\. Backend Setup**

cd server  
npm install  
\# Create a .env file with your ImageKit credentials:  
\# IK\_PUBLIC\_KEY, IK\_PRIVATE\_KEY, IK\_URL\_ENDPOINT  
node app.js

### **2\. Frontend Setup**

cd client  
npm install  
\# Ensure AI models are placed in /public/models  
npm run dev

## **📤 Admin Workflow (Postman Upload)**

The application utilizes a secure API-first approach for content management. Currently, uploads are handled via **Postman**.

**Endpoint:** PUT http://localhost:3000/songs

**Body Configuration (form-data):**

1. **Key:** song (Type: File) \-\> Select your MP3 file.  
2. **Key:** mood (Type: Text) \-\> Enter the mood tag (e.g., happy, sad, neutral).

*The backend processes the buffer in memory and offloads to the cloud instantly.*

## **🔌 API Reference**

| Method | Endpoint | Description |
| :---- | :---- | :---- |
| **GET** | /songs?mood=happy | Queries cloud storage for assets matching the inference tag. |
| **PUT** | /songs | Uploads a song and tags it for specific mood retrieval. |

**Note:** Batch upload functionality (POST /batch) is currently in development and will be released in the next update.