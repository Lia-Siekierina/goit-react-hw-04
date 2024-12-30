import { useState, useEffect } from "react";
import { fetchImages } from "./services/api";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
import { Oval } from "react-loader-spinner";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        if (!query) return;

        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (query) => {
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleImageClick = (imageUrl, altDescription) => {
    setSelectedImage({ url: imageUrl, alt: altDescription });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      <main>
        {error && <p className="error">Error: {error}</p>}
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {isLoading && (
          <div className="loader">
            <Oval
              visible={true}
              height={80}
              width={80}
              color="#4fa94d"
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
        {!isLoading && page < totalPages && <LoadMoreBtn onClick={loadMore} />}
        {selectedImage && (
          <ImageModal
            image={selectedImage.url}
            alt={selectedImage.alt}
            onClose={closeModal}
          />
        )}
      </main>
    </div>
  );
}

export default App;
