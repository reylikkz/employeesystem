package com.example.employeesystembackend.services;

import com.example.employeesystembackend.model.Employee;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeServiceInterface {
    Employee createEmployee(Employee employee);
    List<Employee> getAllEmployees();
    boolean deleteEmployee(Long id);
    Employee getEmployeeById(Long id);
    Employee updateEmployee(Long id, Employee employee);
}
