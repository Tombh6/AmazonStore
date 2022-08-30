import axios from "axios";

//Backend URL 
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
