import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";

export function Image() {
  let [images, setImage] = useState({
    images: [],
    state: false,
  });

  

  useEffect(() => {
    const getImages = async () => {
      const result = await axios.get("/api/get");
      setImage({ images: result.data });
      console.log(result.data);
    };
    getImages();
  }, []);

  let image = images.images.map((ima) => {
    console.log(ima);
    return (
      <>
        <div style={{backgroundImage = `url($ima.route)`}} key={ima.id}></img>
        <button>
          <FontAwesomeIcon icon="trash" />
        </button>
      </>
    );
  });

  return <div>{image}</div>;
}
