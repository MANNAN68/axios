import axios from "axios";

const AxiosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

AxiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response) {
      // error came from server
      err.message = `Error from server: status: ${err.response.status} - message: ${err.response.statusText}`;
    }

    return Promise.reject(err);
  }
);

export default AxiosApi;
