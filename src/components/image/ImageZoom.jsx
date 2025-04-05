/*
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
  
      <div className="zoom-overlay" onClick={handleOverlayClick}></div>

   
      <label>
        <input type="checkbox" />
        <img src={image} alt={altText || "Zoomable"} />
      </label>
    </div>
  );
};

export default ImageZoom;
*/

import React, { useState } from "react";
import "./ImageZoom.css";
import left_arrow from "../../assets/left_arrow.png";
import right_arrow from "../../assets/right_arrow.png";

const ImageZoom = ({ images }) => {
  const [modal, setModal] = useState({ isOpen: false, img: null, index: 0 });

  const openModal = (index) => {
    setModal({ isOpen: true, img: images[index], index });
  };

  const closeModal = () => {
    setModal({ isOpen: false, img: null, index: 0 });
  };

  const navigateImage = (direction) => {
    const newIndex = modal.index + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setModal({ ...modal, img: images[newIndex], index: newIndex });
    }
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="zoomable-image"
          onClick={() => openModal(index)}
        />
      ))}

      {modal.isOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("modal-overlay")) {
              closeModal();
            }
          }}
        >
          <button className="modal-close-btn" onClick={closeModal}>
            ×
          </button>
          <div className="modal-content">
            <img
              src={modal.img}
              alt={`Image ${modal.index + 1}`}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoom;
