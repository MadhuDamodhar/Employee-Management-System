import axios from "axios";
const SERVER_URL = "https://65.1.84.104:9191"; // or your domain name if configured


const BASE_URL = `${SERVER_URL}/api/v1/employees`;

class Service {
  empSave(emp) {
    return axios.post(BASE_URL + "/add", emp);
  }

  getAllEmp() {
    return axios.get(BASE_URL + "/fetch");
  }

  getEmpById(id) {
    return axios.get(BASE_URL + "/" + id);
  }

  deleteEmpById(id) {
    return axios.get(BASE_URL + "/delete/" + id);
  }

  updateEmp(id, emp) {
    return axios.post(BASE_URL + "/update/" + id, emp);
  }
}
export default new Service();
