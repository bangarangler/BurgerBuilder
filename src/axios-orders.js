import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-46fee.firebaseio.com/"
});

export default instance;
