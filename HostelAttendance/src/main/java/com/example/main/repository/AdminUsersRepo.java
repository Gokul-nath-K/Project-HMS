package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.AdminUsers;

public interface AdminUsersRepo extends JpaRepository<AdminUsers, String>{

}
