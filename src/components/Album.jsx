import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./Image";
const Album = ({ images }) => {
  return (
    <div style={{ columns: 4, columnGap: 0 }}>
      {images.map((image, i) => (
        <NavLink key={i} to={`/${image.id}`}>
          <Image
            imageUrl={image.download_url}
            imageId={image.id}
            imageAuthor={image.author}
            key={i}
          ></Image>
        </NavLink>
      ))}
    </div>
  );
};

export default Album;
