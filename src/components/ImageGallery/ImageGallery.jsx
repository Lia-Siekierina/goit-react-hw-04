import PropTypes from "prop-types";
import ImageCard from "./ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, urls, alt_description }) => (
        <li key={id} className={styles.galleryItem}>
          <ImageCard
            imageUrl={urls.small}
            alt={alt_description}
            onClick={() => onImageClick(urls.regular, alt_description)}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
