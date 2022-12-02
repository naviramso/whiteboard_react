import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export function Image() {
  let [image, setImage] = useState({
    Images: []
  });

  // useEffect(() => {
  //   axios.get("/api/get").then((res) => {
  //     setImage(res.data);
  //   });
  // }, []);

  const handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setImage({ [nam]: val });
  };

  const handleChange2 = () => {
    setImage({});
  };

  const submit = () => {
    axios.post("/api/insert", image).then(() => {
      alert("success post");
    });
    console.log(image);
    document.location.reload();
  };

  const delet = (id) => {
      axios.delete("/api/delete/${id}");
      document.location.reload();
  };

  return (
    <div>
      <img src="" className=""></img>
      <button onClick={delet(image.id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
}
