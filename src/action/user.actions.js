import axios from "axios";

export const GET_USER = "GET_USER";

//payload

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.React_APP_API_URL}/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
