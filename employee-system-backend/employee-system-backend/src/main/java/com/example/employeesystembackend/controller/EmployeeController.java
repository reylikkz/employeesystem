package com.example.employeesystembackend.controller;

import com.example.employeesystembackend.entity.EmployeeEntity;
import com.example.employeesystembackend.dto.EmployeeDto;
import com.example.employeesystembackend.services.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    // create employee
    @PostMapping("/employees")
    public ResponseEntity<EmployeeEntity> createEmployee(@RequestBody @Valid final EmployeeDto employee) {
        return new ResponseEntity<>(employeeService.createEmployee(employee), HttpStatus.CREATED);
    }

    // read employees
    @GetMapping("/employees")
    public List<EmployeeEntity> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // delete employee
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable final Long id) {
        boolean deleted = false;
        // return true if found
        deleted = employeeService.deleteEmployee(id);
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
    public ResponseEntity<EmployeeEntity> getEmployeeById(@PathVariable final Long id) {
        return ResponseEntity.ok(employeeService.getEmployeeById(id));
    }

    // update employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable final Long id, @RequestBody @Valid final EmployeeDto employee) {
        return ResponseEntity.ok(employeeService.updateEmployee(id, employee));
    }
}
