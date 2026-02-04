import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./facialExpression.css";
import axios from "axios";

export default function FacialExpression({ setSongs }) {
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState("waiting...");

  async function detectMood() {
    if (!videoRef.current) return;

    try {
      const result = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions(),
        )
        .withFaceExpressions();

      if (result) {
        const expressions = result.expressions;

        // Find the emotion with the highest score
        const topEmotion = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b,
        );

        setEmotion(topEmotion);
        console.log("Detected:", topEmotion);

        // FIX: Use 'topEmotion' directly here. 'emotion' state won't satisfy immediately.
        const response = await axios.get(
          "http://localhost:3000/songs?mood=" + topEmotion,
        );

        // Assuming your backend returns { songs: [...] }
        setSongs(response.data.songs);
      } else {
        console.log("No face detected");
      }
    } catch (error) {
      console.error("Error detecting mood or fetching songs:", error);
    }
  }

  useEffect(() => {
    let stream = null;

    async function init() {
      try {
        // Ensure models are in your public/models folder
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");

        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    }

    init();

    // Cleanup: Stop camera when component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="mood-element">
      <video ref={videoRef} autoPlay muted className="user-video-feed" />
      <br />
      <button onClick={detectMood}>Detect Mood</button>
      <h3>Current Mood: {emotion}</h3>
    </div>
  );
}
