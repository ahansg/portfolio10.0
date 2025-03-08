import React from "react";
import ImageMenu from "./ImageMenu"; // Correct path to ImageMenu.js
import ImageZoom from "./ImageZoom"; // Correct path to ImageZoom.jsx
import "./ImageZoom.css"; // Import CSS for zoom effect

const ZoomableImageGallery = ({ id }) => {
  // If an `id` is provided, filter the specific image to render
  const imagesToRender = id
    ? ImageMenu.filter((image) => image.id === Number(id)) // Render specific image if id is provided
    : ImageMenu; // Render all images if no `id` is provided

  return (
    <div className="zoomable-gallery">
      {/* Render the filtered image(s) */}
      {imagesToRender.map(({ id, image }) => (
        <ImageZoom key={id} image={image} altText={`Image ${id}`} />
      ))}
    </div>
  );
};

export default ZoomableImageGallery;
