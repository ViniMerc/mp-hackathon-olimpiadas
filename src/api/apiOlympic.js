import axios from "axios";

const apiOlympic = axios.create({
  baseURL: `https://apis.codante.io/olympic-games`,
});

export { apiOlympic };
