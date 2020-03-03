import axios from "axios"

const SERVER_PORT = process.env.SERVER_PORT || 2000
const API_PREFIX = "/api"

const { protocol, hostname } = document.location

const API = axios.create({
  baseURL: `${protocol}//${hostname}:${SERVER_PORT}${API_PREFIX}`,
  headers: {
    "Content-Type": "application/json"
  }
})

API.hostname = hostname
API.port = SERVER_PORT

export default API
