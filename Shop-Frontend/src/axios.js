import axios from "axios";

//Backend URL 
const instance = axios.create({
  baseURL: "https://localhost:8000",
});

export default instance;
