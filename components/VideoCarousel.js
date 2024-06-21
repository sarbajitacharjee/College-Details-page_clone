"use client"

import { useState } from 'react';

const VideoCarousel = () => {
  const videos = [
    '/reading.mp4',
    '/playing.mp4',
    '/reader.mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <video
        className="w-full h-auto"
        
        autoPlay
        loop
        muted
        key={videos[currentVideoIndex]}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        {/*  browser does not support the video tag. */}
      </video>
      <div className=" flex justify-between  transform -translate-y-1/2">
        <button
          className="text-white bg-gray-800 px-3 py-1 rounded-md mr-2"
          onClick={prevVideo}
        >
          Prev
        </button>
        <button
          className="text-white bg-gray-800 px-3 py-1 rounded-md"
          onClick={nextVideo}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
