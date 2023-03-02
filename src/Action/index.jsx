import axios from "axios";

export const PostEvent = (array, Description, PersonalProps) => {
  const formData = new FormData();
  formData.append("UserId", PersonalProps[0]?.id);
  formData.append("Nom", PersonalProps[0]?.Nom);
  formData.append("Prenom", PersonalProps[0]?.Prenom);
  formData.append("Date", new Date());
  formData.append("Titre", array.Title);
  formData.append("Description", Description);
  formData.append("Image", array.Image);
  formData.append("Url", array.Url);
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/PostEvent`, formData)
    .then((res) => {
      if (res) {
        window.location = "/component";
      }
    })
    .catch((err) => console.log(err));
};

export const deletePost = async (id) => {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/api/deletePost/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const UpdatePost = async (id, array, Description) => {
  const formData = new FormData();
  formData.append("Titre", array.Title);
  formData.append("Description", Description);
  formData.append("Image", array.Image);
  formData.append("Url", array.Url);
  axios
    .put(`${process.env.REACT_APP_API_URL}/api/UpdatePost/${id}`, formData)
    .then((res) => console.log("success update"))
    .catch((err) => console.log(err));
};
