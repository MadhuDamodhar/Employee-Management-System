import axios from "axios";

const SERVER_URL = "https://employee-management-system-two-beta.vercel.app"; // Corrected URL
const BASE_URL = `${SERVER_URL}/api/v1/employees`;

class Service {
  async empSave(emp) {
    try {
      const response = await axios.post(`${BASE_URL}/add`, emp);
      return response.data;
    } catch (error) {
      console.error("Error saving employee:", error);
      throw error; // Rethrow for handling in the calling code
    }
  }

  async getAllEmp() {
    try {
      const response = await axios.get(`${BASE_URL}/fetch`);
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  }

  async getEmpById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching employee with ID ${id}:`, error);
      throw error;
    }
  }

  async deleteEmpById(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/delete/${id}`); // Use DELETE method
      return response.data;
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error);
      throw error;
    }
  }

  async updateEmp(id, emp) {
    try {
      const response = await axios.put(`${BASE_URL}/update/${id}`, emp); // Use PUT for updates
      return response.data;
    } catch (error) {
      console.error(`Error updating employee with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new Service();
