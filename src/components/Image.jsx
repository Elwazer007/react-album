import React from "react";
import { motion } from "framer-motion";
const Image = ({ imageUrl, imageId, imageAuthor }) => {
  return (
    <motion.img
      whileHover={{ scale: 1.5 }}
      src={imageUrl}
      key={imageId}
      className="image"
      style={{ padding: 10 / 2 }}
      alt={imageAuthor}
    />
  );
};

export default Image;
