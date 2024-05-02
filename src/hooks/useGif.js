// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
import { useState, useEffect } from "react";
const useGif = () => {
  const [loading, setloading] = useState("");
  const [gif, setGif] = useState("");
  const [value, setvalue] = useState("");
  const api = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${value}`;

  const fetchGif = async () => {
    try {
      setloading(true);
      const response = await fetch(url);
      const { data, meta } = await response.json();

      setGif(data.images.downsized_large.url);

      if (meta.status === "401") {
        return (
          <div>
            <h1>gif generator limit exceeds</h1>
          </div>
        );
      }
      setloading(false);
    } catch (error) {
      console.error("Error fetching random gif:", error);
    }
  };

  useEffect(() => {
    fetchGif();
  }, []);

  return { loading, value, setvalue, gif, fetchGif };
};

export default useGif;
