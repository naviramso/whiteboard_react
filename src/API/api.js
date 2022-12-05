import axios from "axios";

const image = {
  imageName: "canvas1",
};

export const submit = (imageName) => {
  axios.post('/api/insert', imageName)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};


const deleteImage = (id) => {
  axios.delete("/api/delete/${id}");
  document.location.reload();
};

export const uploadImage = (nameImage, file) => {
  let form = new FormData();
  form.append('name', name);
  form.append('file', file, "form data");

  return axios.post("api/upload", form);
}
