import axios from "axios";

const API_KEY = "52395472-66a9253f6b208305cdb9e79a5";

export const getImages = async (query) => {
  const cacheKey = `pixa_${query.toLowerCase()}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    console.log("✅ Fetched from localStorage:", query);
    return JSON.parse(cachedData);
  }

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&per_page=3&image_type=photo`;

  try {
    const resp = await axios.get(url);
    const hits = resp.data.hits;

    localStorage.setItem(cacheKey, JSON.stringify(hits));
    console.log("🌍 Fetched from API:", query);

    return hits;
  } catch (err) {
    console.error("❌ Error fetching images:", err);
    throw err;
  }
};
