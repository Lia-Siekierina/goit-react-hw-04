import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ image, alt, onClose }) => {
  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Image Modal"
    >
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <img src={image} alt={alt} className={styles.image} />
    </ReactModal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
