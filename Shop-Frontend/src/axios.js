import axios from "axios";

//Backend URL 
const instance = axios.create({
  baseURL: "https://shop-backend-app.herokuapp.com",
});

export default instance;
