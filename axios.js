import axios from "axios";
axios.defaults.baseURL = "http://localhost/hrms/api/";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export default axios;
