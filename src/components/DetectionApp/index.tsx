import React, { useEffect, useRef, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const ObjectDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cameraInitialized, setCameraInitialized] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' },
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            await videoRef.current.play();
            setCameraInitialized(true);
          }
        } catch (error) {
          console.error('Error accessing the camera', error);
        }
      }
    };

    const loadModelAndDetect = async () => {
      try {
        const model = await cocoSsd.load();
        if (!model || typeof model.detect !== 'function') {
          throw new Error('Model could not be loaded or detect function is missing');
        }
        requestAnimationFrame(() => detectVideo(model));
      } catch (error) {
        console.error('Error loading the model', error);
      }
    };

    const detectVideo = async (model: cocoSsd.ObjectDetection) => {
      if (videoRef.current) {
        try {
          const predictions = await model.detect(videoRef.current);
          renderPredictions(predictions);
        } catch (error) {
          console.error('Error during detection', error);
        }
        requestAnimationFrame(() => detectVideo(model));
      }
    };

    const renderPredictions = (predictions: cocoSsd.DetectedObject[]) => {
      if (canvasRef.current && videoRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;

          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

          predictions.forEach((prediction) => {
            const [x, y, width, height] = prediction.bbox;
            ctx.strokeStyle = '#00FFFF';
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, width, height);
            ctx.font = '18px Arial';
            ctx.fillStyle = '#00FFFF';
            ctx.fillText(
              `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
              x,
              y > 10 ? y - 5 : 10
            );
          });
        }
      }
    };

    if (cameraInitialized) {
      setupCamera().then(() => {
        loadModelAndDetect();
      });
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [cameraInitialized]);

  const handleStartCamera = () => {
    if (!cameraInitialized) {
      setCameraInitialized(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Live Object Detection</h1>
      {!cameraInitialized && (
        <button
          onClick={handleStartCamera}
          className="px-6 py-3 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Start Camera
        </button>
      )}
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full max-w-xl rounded-lg"
          autoPlay
          playsInline
          muted
        />
        <canvas ref={canvasRef} className="w-full max-w-xl absolute top-0 left-0 rounded-lg" />
      </div>
    </div>
  );
};

export default ObjectDetection;
