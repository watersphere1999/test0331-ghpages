import axios from "axios";
const demoapi = axios.create({
  baseURL: "http://05191c47e540.ngrok.io/",
  headers: { "X-Secure-Code": "12345678", },
});
export default demoapi;
