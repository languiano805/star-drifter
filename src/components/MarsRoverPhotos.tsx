import { useEffect, useState } from "react";
import "./MarsRoverPhotos.css";

import apiClient from "../services/api-client";

interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  rover: {
    name: string;
  };
}

const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<{ latest_photos: MarsPhoto[] }>(
        "mars-photos/api/v1/rovers/curiosity/latest_photos"
      )
      .then((response) => {
        return setPhotos(response.data.latest_photos);
      })
      .catch((error) => {
        setError("Failed to fetch Mars Rover photos.");
        console.error("Error fetching Mars Rover photos:", error);
      });
  }, []);

  return (
    <div className="mars-rover-photos-container" id="PhotosFromMars">
      <div className="mars-rover-photos-title text-uppercase">
        Photos from mars
      </div>
      <hr className="mars-rover-photos-divider" />

      <div className="mars-rover-photos-content">
        {photos.map((photo: MarsPhoto) => (
          <div key={photo.id} className="mars-rover-photo-card">
            <img
              src={photo.img_src}
              className="card-img mars-rover-photo-image"
              alt="Mars Rover"
            />
            <div className="mars-rover-photo-description">
              <div className="mars-rover-photo-description-title text-uppercase">
                Rover: {photo.rover.name}
              </div>
              <div className="mars-rover-photo-description-content">
                Earth Date: {photo.earth_date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsRoverPhotos;
