"use client"

import { useState } from 'react';

const VideoCarousel = () => {
  // Array of video file paths
  const videos = [
    './reading.mp4',
    './playing.mp4',
    './reader.mp4',
  ];

  // State to manage the index of the current video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to handle moving to the next video
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle moving to the previous video
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      {/* Video element with attributes */}
      <video
        className="w-full h-auto"
        autoPlay  // Autoplay the video when loaded
        loop     // Loop the video indefinitely
        muted    // Mute the video (no sound)
        key={videos[currentVideoIndex]} // Key to force re-render when video changes
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" /> {/* Video source */}
        {/* Fallback message if browser does not support the video tag */}
      </video>
      {/* Navigation buttons */}
      <div className="flex justify-between transform -translate-y-1/2">
        <button
          className="text-white bg-gray-800 px-3 py-1 rounded-md mr-2"
          onClick={prevVideo} // Button to move to previous video
        >
          Prev
        </button>
        <button
          className="text-white bg-gray-800 px-3 py-1 rounded-md"
          onClick={nextVideo} // Button to move to next video
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
