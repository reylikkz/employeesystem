package com.example.employeesystembackend.controller;

import com.example.employeesystembackend.model.Employee;
import com.example.employeesystembackend.services.EmployeeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    @Autowired
    private EmployeeServiceInterface employeeServiceInterface;

    // create employee
    @PostMapping("/employees")
    public ResponseEntity<?> createEmployee(@RequestBody Employee employee) {
        try {
            return new ResponseEntity<>(employeeServiceInterface.createEmployee(employee), HttpStatus.CREATED);
        } catch (ResponseStatusException e) {
            // we get the custom message of the given error
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    // read employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeServiceInterface.getAllEmployees();
    }

    // delete employee
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable final Long id) {
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

    // get employee
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable final Long id) {
        return ResponseEntity.ok(employeeServiceInterface.getEmployeeById(id));
    }

    // update employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable final Long id, @RequestBody final Employee employee) {
        return ResponseEntity.ok(employeeServiceInterface.updateEmployee(id, employee));
    }
}
