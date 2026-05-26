package com.barbershop.backend.domain.model;

import com.barbershop.backend.domain.model.enums.Role;

public class Customer extends User{

    public Customer(String fullName, String email, String password, String phoneNumber, boolean active, Role role) {
        super(fullName, email, password, phoneNumber, active, role);
    }
}
