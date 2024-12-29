import axios from "axios";

const API_KEY = "Jdb7FKzxxO-jebW6XVafzYcdjjx2xJdItiotTGm-FYI";
const API_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  return response.data;
};
