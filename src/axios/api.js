import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://ace033ded550.ngrok.io",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
