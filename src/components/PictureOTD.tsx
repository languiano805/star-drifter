import { useEffect, useState } from "react";
import "./PictureOTD.css";

import apiClient from "../services/api-client";

interface Apod {
  url: string;
  title: string;
  explanation: string;
}

const PictureOTD = () => {
  const [apod, setApod] = useState<Apod | null>(null);


  useEffect(() => {
    apiClient
      .get<Apod>("/planetary/apod")
      .then((response) => {
        setApod(response.data);
      })
      .catch((error) => {
        console.error("Error fetching APOD:", error);
      });
  }, []);

  return (
    <div className="apod-container " id="PictureOTD">
      <div className="apod-title text-uppercase ">
        {apod?.title || "Loading..."}
        <hr />
      </div>

      <div className="apod-content">
        <img
          src={apod?.url}
          className="card-img apod-image"
          alt="Astronomy Picture of the Day"
        />
        <div className="apod-description ">
          <div className="apod-description-title text-uppercase">
            Description
          </div>
          <div className="apod-description-content">
            {apod?.explanation || "loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureOTD;
