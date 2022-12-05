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
    axios.get("/api/get").then((result) => {
      setImage({
        images: result.data,
        state: true,
      });
    });
  }, []);

  console.log(images);
  let image = images.images.map((val, key) => {
    return(
      <React.Fragment>
        <image src = {images.images.nameImage} />
        {console.log(images.images.nameImage)}
      </React.Fragment>
    )
  })

  return (
    <div>
      {image}
      <button>
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
}
