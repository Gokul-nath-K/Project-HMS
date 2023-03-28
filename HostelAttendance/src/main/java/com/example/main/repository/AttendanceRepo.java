package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.Attendance;

public interface AttendanceRepo extends JpaRepository<Attendance, Integer>{

}
