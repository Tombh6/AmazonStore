import axios from "axios";

//Backend URL 
const instance = axios.create({
  baseURL: "https://localhost:3001",
});

export default instance;
