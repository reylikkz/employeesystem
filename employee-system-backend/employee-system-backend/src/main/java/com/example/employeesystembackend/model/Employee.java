package com.example.employeesystembackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// TODO: rename emailId to email, it is a field
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Employee {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}