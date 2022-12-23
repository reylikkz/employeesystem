package com.example.employeesystembackend.controller;

import com.example.employeesystembackend.model.Employee;
import com.example.employeesystembackend.services.EmployeeService;
import com.example.employeesystembackend.services.EmployeeServiceInterface;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {


    private final EmployeeServiceInterface employeeServiceInterface;

    public EmployeeController(EmployeeService employeeServiceInterface) {
        this.employeeServiceInterface = employeeServiceInterface;
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeServiceInterface.createEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeServiceInterface.getAllEmployees();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        boolean deleted = false;
        // return true if found
        deleted = employeeServiceInterface.deleteEmployee(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        /*
        {
            "deleted": true
        }
         */
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = null;
    employee = employeeServiceInterface.getEmployeeById(id);
    return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee = employeeServiceInterface.updateEmployee(id, employee);
        return ResponseEntity.ok(employee);
    }
}
