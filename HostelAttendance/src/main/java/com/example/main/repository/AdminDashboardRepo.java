package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.AdminDashboard;

public interface AdminDashboardRepo extends JpaRepository<AdminDashboard, String>{

}
