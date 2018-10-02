import axios from 'axios';

const jobAxios = axios.create({
  baseURL: 'http://localhost:8080/api/job'
});

export default jobAxios;