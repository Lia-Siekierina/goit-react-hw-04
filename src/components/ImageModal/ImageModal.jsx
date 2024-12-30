import PropTypes from "prop-types";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, alt, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={image} alt={alt || "Image"} />
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
