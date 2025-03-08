import React, { useState } from "react";
import two from "../../assets/hobbyAssets/2.png";
import three from "../../assets/hobbyAssets/3.png";
import five from "../../assets/hobbyAssets/5.png";
import six from "../../assets/hobbyAssets/6.png";
import seven from "../../assets/hobbyAssets/7.png";
import eight from "../../assets/hobbyAssets/8.png";
import nine from "../../assets/hobbyAssets/9.png";
import ten from "../../assets/hobbyAssets/10.png";
import eleven from "../../assets/hobbyAssets/11.png";
import twelve from "../../assets/hobbyAssets/12.png";
import "./HobbyGrids.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import left_arrow from "../../assets/left_arrow.png";
import right_arrow from "../../assets/right_arrow.png";

// Array of images
const images = [
  { src: eight, height: 300, width: 300 },

  { src: three, height: 250, width: 300 },
  { src: two, height: 150, width: 250 },
  { src: nine, height: 250, width: 300 },
  { src: seven, height: 500, width: 300 },
  { src: ten, height: 150, width: 300 },
  { src: eleven, height: 150, width: 250 },
  { src: five, height: 350, width: 300 },
  { src: twelve, height: 350, width: 300 },
  { src: six, height: 350, width: 300 },
];

const HobbyGrids = () => {
  const [modal, setModal] = useState({ img: "", index: 0 });

  const openModal = (img, index) => {
    setModal({ img, index });
  };

  const closeModal = () => {
    setModal({ img: "", index: 0 });
  };

  const navigateImage = (direction) => {
    const newIndex = modal.index + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setModal({ img: images[newIndex].src, index: newIndex });
    }
  };

  return (
    <>
      {/* Modal for image viewer */}
      {modal.img && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("modal-overlay")) {
              closeModal(); // Lukk modal kun hvis man klikker på bakgrunnen
            }
          }}
        >
          <button className="modal-close-btn" onClick={closeModal}>
            ×
          </button>
          <div className="modal-content">
            <button
              className="modal-nav-btn modal-nav-btn-left"
              onClick={() => navigateImage(-1)}
              disabled={modal.index === 0}
            >
              <img src={left_arrow} />
            </button>
            <img
              src={modal.img}
              alt={`Image ${modal.index + 1}`}
              className="modal-image"
            />
            <button
              className="modal-nav-btn modal-nav-btn-right"
              onClick={() => navigateImage(1)}
              disabled={modal.index === images.length - 1}
            >
              <img src={right_arrow} />
            </button>
          </div>
        </div>
      )}

      {/* Masonry Grid */}
      <div className="masonry-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className="masonry-image"
            style={{
              height: `${image.height}px`,
              gridRowEnd: `span ${Math.ceil(image.height / 10)}`, // Adjust row span
              width: `${image.width}px`, // Optional: Adjust width as needed
            }}
            onClick={() => openModal(image.src, index)}
          />
        ))}
      </div>
    </>
  );
};

export default HobbyGrids;
