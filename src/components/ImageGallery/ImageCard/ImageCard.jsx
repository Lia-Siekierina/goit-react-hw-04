import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, alt, onClick }) => {
  return (
    <img
      src={imageUrl}
      alt={alt || "Image"}
      className={styles.image}
      onClick={onClick}
    />
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
