import axios from "axios";

export const getApi = (url) => {
  return axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
export const postApi = (url, data) => {
  return axios
    .post(url, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
export const putApi = (url, data) => {
  return axios
    .put(url, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};

export const deleteApi = (url, id) => {
  return axios
    .delete(`${url}/?=${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
