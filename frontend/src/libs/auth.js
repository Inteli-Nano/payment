import axios from "axios";
const auth = {
  getToken: () => {
    const token = localStorage.getItem(
      "react-jwt-access-token-for-miro-project"
    );
    return token ? token : "";
  },
  setToken: (token) => {
    axios.defaults.headers.common["Authorization"] = token;
    window.localStorage.setItem(
      "react-jwt-access-token-for-miro-project",
      token
    );
  },
  hasToken: () => {
    return localStorage.getItem("react-jwt-access-token-for-miro-project")
      ? true
      : false;
  },
  removeToken: () => {
    delete axios.defaults.headers.common["Authrization"];
    window.localStorage.removeItem("react-jwt-access-token-for-miro-project");
  },
};

export default auth;
