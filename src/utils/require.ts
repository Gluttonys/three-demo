import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 5_000,
  timeoutErrorMessage: "接口已经超时"
})


request.interceptors.response.use((response) => {
  const {data} = response
  return data
})


export default request
