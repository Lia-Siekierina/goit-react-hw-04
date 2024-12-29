import { useState, useEffect } from "react";
import { fetchImages } from "./services/api";
import "./App.css"; // Глобальні стилі

import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

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

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      <main>
        {error && <p className="error">Error: {error}</p>}
        <ImageGallery images={images} />
        {isLoading && <p>Loading...</p>}
        {!isLoading && page < totalPages && <LoadMoreBtn onClick={loadMore} />}
      </main>
    </div>
  );
}

export default App;
