import { React } from "react";
import "./imageCard.css";
const ImageCard = ({ title, content, image, blogid, slug }) => {
  const path = `/blogs/#/${slug}`;
  return (
    <a href={path} className="imageCard card2">
      <h2>{title}</h2>
      <img alt="" src={image} />
    </a>
  );
};
export default ImageCard;
