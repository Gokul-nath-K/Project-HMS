package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.StudentDashboard;

public interface DashboardRepo extends JpaRepository<StudentDashboard, String>{

}
