import React from "react";
import "./ImageZoom.css"; // Import CSS for zoom effect

const ImageZoom = ({ image, altText }) => {
  // Function to handle clicking on the overlay to zoom out
  const handleOverlayClick = (e) => {
    // Only uncheck the checkbox if it's visible (zoomed in)
    const checkbox = e.target.previousElementSibling; // The associated checkbox
    if (checkbox && checkbox.checked) {
      checkbox.checked = false; // Uncheck to zoom out
    }
  };

  return (
    <div className="click-zoom">
      {/* The overlay that will appear when the image is zoomed in */}
      <div className="zoom-overlay" onClick={handleOverlayClick}></div>

      {/* The checkbox triggers the zoom effect */}
      <label>
        <input type="checkbox" />
        <img src={image} alt={altText || "Zoomable"} />
      </label>
    </div>
  );
};

export default ImageZoom;
