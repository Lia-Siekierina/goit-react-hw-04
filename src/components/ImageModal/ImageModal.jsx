import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, alt, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {isLoading && <div className={styles.loader}>Loading...</div>}
        <img
          src={image}
          alt={alt || "Image"}
          onLoad={handleImageLoad}
          className={isLoading ? styles.hidden : ""}
        />
        <button type="button" className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
