import axios from 'axios';

export const  instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
instance.interceptors.request.use(
    (config)=>{
        config.headers.Authorization=`Bearer`+"asdsadffasdf"
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)


instance.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response;
    },
    function (error) {
      // Do something with response error
      if (error.response.status === 401) {
        // Handle unauthorized error
      }
      return Promise.reject(error);
    }
  );