import { useEffect, useState } from "react";

import apiClient from "../services/api-client";

interface Apod {
  url: string;
  title: string;
}

const PictureOTD = () => {
  const [apod, setApod] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Apod>("/planetary/apod")
      .then((response) => {
        setApod(response.data.url);
      })
      .catch((error) => {
        setError("Failed to fetch the Astronomy Picture of the Day.");
        console.error("Error fetching APOD:", error);
      });
  }, []);

  return (
    <div className="card text-bg-dark">
      <img src={apod} className="card-img" alt="Astronomy Picture of the Day" />
    </div>
  );
};

export default PictureOTD;
