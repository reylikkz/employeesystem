// calling the api through axios library
import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// CRUD 
class EmployeeService {

    // create employee
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    // read employees
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    // update employee
    updateEmployee(employee, id) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }

    // delete employee
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }
}

export default new EmployeeService();