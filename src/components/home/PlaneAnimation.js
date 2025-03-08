import React, { useEffect } from "react";
import "./planeAnimation.css";
import planeImage from "../../assets/paperplane.png";

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector(".paperplane");
    const path = document.querySelector(".track path");

    // Get the total length of the path
    const pathLength = path.getTotalLength();

    // Animation duration
    const duration = 5000; // 5 seconds for a full loop

    // Set the strokeDasharray and strokeDashoffset for debugging (optional)
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    let animationFrame;

    const animatePlane = (timestamp) => {
      // Calculate normalized progress (0 to 1)
      const progress = (timestamp % duration) / duration;

      // Calculate the current position along the path
      const currentLength = progress * pathLength;

      // Get the point at the current position
      const point = path.getPointAtLength(currentLength);

      // Calculate the angle for smooth rotation
      const offset = 2; // Small offset for smooth angle calculation
      const nextPoint = path.getPointAtLength(
        Math.min(currentLength + offset, pathLength)
      );
      const angle =
        Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
        (180 / Math.PI);

      // Align the plane to the SVG's viewBox coordinates
      const svg = document.querySelector(".track");
      const { x: svgX, y: svgY } = svg.getBoundingClientRect();

      // Calculate plane's position and adjust to the viewBox
      const planeWidth = plane.offsetWidth;
      const planeHeight = plane.offsetHeight;
      plane.style.transform = `translate(${
        svgX + point.x - planeWidth / 2
      }px, ${svgY + point.y - planeHeight / 2}px) rotate(${angle}deg)`;

      // Continue the animation
      animationFrame = requestAnimationFrame(animatePlane);
    };

    // Start the animation
    animationFrame = requestAnimationFrame(animatePlane);

    // Cleanup animation on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="animation-container">
      <img src={planeImage} alt="Paper Plane" className="paperplane" />
      <svg
        className="track"
        width="100%" // Full width of the container
        height="300" // Adjust container height as needed
        viewBox="0 0 450 100" // Match the viewBox to your path's actual dimensions
        preserveAspectRatio="xMidYMid meet" // Preserve aspect ratio
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 34.5004C52 18.5004 104.5 56.0003 92.5 76.0001C80.5 95.9998 64 57.461 104.5 59.5004C145 61.5398 149.5 56.0003 183 36.5001C216.5 16.99984 297.5 -10.3127 333 36.5001C368.5 83.3129 402.5 56.0003 449 56.0003"
          stroke="black"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
};

export default PlaneAnimation;
