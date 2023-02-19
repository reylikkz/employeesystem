package com.example.employeesystembackend.services;

import com.example.employeesystembackend.entity.EmployeeEntity;
import com.example.employeesystembackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeEntity createEmployee(EmployeeDto employee);
    List<EmployeeEntity> getAllEmployees();
    boolean deleteEmployee(Long id);
    EmployeeEntity getEmployeeById(Long id);
    EmployeeDto updateEmployee(Long id, EmployeeDto employee);
}
