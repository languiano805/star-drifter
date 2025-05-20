import { useEffect, useState } from "react";
import "./CloseEarthObjects.css";
import axios from "axios";

interface CloseEarthObject {
  fullname: string;
  dist: string;
  orbit_id: string;
  des: string;
}

const CloseEarthObjects = () => {
  const [ceo, setCeo] = useState<CloseEarthObject[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://corsproxy.io/?" +
          "https://ssd-api.jpl.nasa.gov/cad.api?dist-max=10LD&date-min=2018-01-01&sort=dist"
      )
      .then((response) => {
        const fields = response.data.fields;
        const data = response.data.data;
        if (!fields || !data) {
          setCeo([]);
          return;
        }
        const ceoObjects = data.map((item: string[]) => {
          const fullname = item[fields.indexOf("fullname")];
          const des = item[fields.indexOf("des")];
          return {
            fullname: fullname || des, // Use fullname if available, otherwise use des
            dist: item[fields.indexOf("dist")],
            orbit_id: item[fields.indexOf("orbit_id")],
          };
        });
        setCeo(ceoObjects);
      })
      .catch((error) => {
        console.error("Error fetching close earth objects:", error);
      });
  }, []);

  return (
    <div className="CEO-container">
      <div className="CEO-title text-uppercase ">Astroid Watch</div>
      <hr />
      <div className="CEO-content">
        {ceo.map((object, index) => (
          <div key={index} className="CEO-card">
            <div className="CEO-card-title text-uppercase">
              {object.fullname}
            </div>
            <div className="CEO-card-content">
              <div className="CEO-card-item">
                <span className="CEO-card-item-label">Orbit ID:</span>
                {object.orbit_id}
              </div>
              <div className="CEO-card-item">
                <span className="CEO-card-item-label">Distance:</span>
                {object.dist} km
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloseEarthObjects;
