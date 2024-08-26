import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import top from "../../../images/Bellamy/0026_26A.jpg";
import middle from "../../../images/Bellamy/EF3A3926.jpg";
import bottom from "../../../images/Bellamy/EF3A3709.jpg";

function Home() {
  const cursorStyle = 'transform: translate3d(10.8648px, 2.452px, 0px);'; // Adjust the transform style

useEffect(() => {
  const handleMouseEnter = () => {
    const imageContainers = document.querySelectorAll('.image-container');
    const totalImages = imageContainers.length;

    imageContainers.forEach((container, index) => {
      const translation = ((index + 1) / totalImages) * 50; // Adjust the extend amount
      container.style.transform = `translateX(${translation}px)`; // Adjust the scale amount
    });

    const bottomImage = document.querySelector('.bottom-image');
    if (bottomImage) {
      bottomImage.style.transform = 'translateX(300px) scale(0.93)'; // Adjust the extend and scale amount
    }

    const thirdImage = document.querySelectorAll('.image-container')[1]; // Selecting the third image container
    if (thirdImage) {
      thirdImage.style.transform = 'translateX(200px) scale(0.97)'; // Adjust the extend and scale amount
    }

    const cursor = document.getElementById('Cursor');
    if (cursor) {
      cursor.style = cursorStyle; // Apply the custom cursor style
    }
  };

  const handleMouseLeave = () => {
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach((container) => {
      container.style.transform = 'translateX(0)';
    });
    const bottomImage = document.querySelector('.bottom-image');

    if (bottomImage) {
      bottomImage.style.transform = 'translateX(90px) scale(1)'; // Adjust the extend and scale amount
    }

    const thirdImage = document.querySelectorAll('.image-container')[1]; // Selecting the third image container
    if (thirdImage) {
      thirdImage.style.transform = 'translateX(50px) scale(1)'; // Adjust the extend and scale amount
    }

    const cursor = document.getElementById('Cursor');
    if (cursor) {
      cursor.style = ''; // Reset the cursor style
    }
  };

  const imageStack = document.querySelector('.image-stack');
  imageStack.addEventListener('mouseenter', handleMouseEnter);
  imageStack.addEventListener('mouseleave', handleMouseLeave);

  // Cleanup function to remove event listeners when the component unmounts
  return () => {
    imageStack.removeEventListener('mouseenter', handleMouseEnter);
    imageStack.removeEventListener('mouseleave', handleMouseLeave);
  };
}, []);


  return (
    <div className="image-stack">
      <div className="image-container bottom-image">
        <img src={bottom} alt="Bellamy1" />
      </div>
      <div className="image-container">
        <img src={top} alt="Bellamy3" />
      </div>
      <div className="image-container">
        <img src={middle} alt="Bellamy2" />
      </div>
    </div>
  );
}

export default Home;
