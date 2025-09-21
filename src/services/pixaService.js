import axios from "axios";

const API_KEY = "52395472-66a9253f6b208305cdb9e79a5";

export const getImages = async (query) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=3&image_type=photo`;
  const resp = await axios.get(url);
  return resp.data.hits; 
};
