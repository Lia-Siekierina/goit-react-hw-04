import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, alt }) => {
  return (
    <li className={styles.imageCard}>
      <img src={imageUrl} alt={alt || "Image"} />
    </li>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageCard;
