package com.example.employeesystembackend.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployeeDto {
    private long id;
    @NotBlank(message = "First name should not be blank!")
    private String firstName;
    @NotBlank(message = "Last name should not be blank!")
    private String lastName;
    @Email
    @NotBlank(message = "Email should not be blank!")
    @Column(unique = true)
    private String email;
}
