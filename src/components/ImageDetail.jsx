import React, { Component } from "react";
import { useParams } from "react-router-dom";
const ImageDetail = ({ images }) => {
  const { ids } = useParams();

  const getImage = images.find(({ id }) => id === ids);
  return (
    <div className="image-detail">
      <h2>By: {getImage.author}</h2>
      <img src={getImage.download_url} />
    </div>
  );
};

export default ImageDetail;
