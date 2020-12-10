import {axios} from 'axios';

export default axios.create({
  baseURL: "http://b5e2409e87de.ngrok.io/api",
  headers: {
    "Content-type":"application/json"
  }
})