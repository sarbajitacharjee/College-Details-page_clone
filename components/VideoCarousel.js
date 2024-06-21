"use client"
import React, { useState, useEffect } from 'react';

const VideoCarousel = () => {
  const videos = [
    {
      id: 1,
      src: 'reading.mp4',
      title: 'Video 1',
    },
    {
      id: 2,
      src: 'reader.mp4',
      title: 'Video 2',
    },
    {
      id: 3,
      src: 'playing.mp4',
      title: 'Video 3',
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  // Effect to handle autoplay
  useEffect(() => {
    // Clear existing interval when component unmounts or when videos change
    return () => clearInterval(autoplayInterval);
  }, [autoplayInterval]);

  // Function to handle switching to the next video
  const playNextVideo = () => {
    const currentIndex = videos.findIndex((video) => video.id === currentVideo.id);
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentVideo(videos[nextIndex]);
  };

  // Start autoplay when component mounts
  useEffect(() => {
    const interval = setInterval(playNextVideo, 5000); // Change interval (5000ms = 5 seconds)
    setAutoplayInterval(interval);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/4">
        <div className="mb-4">
          <video className="w-full rounded-lg" autoPlay muted controls>
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-between">
          {videos.map((video) => (
            <button
              key={video.id}
              className={`w-1/3 rounded-lg p-1 ${
                video.id === currentVideo.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => setCurrentVideo(video)}
            >
              {video.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
