package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.main.model.StudentDashboard;

public interface DashboardRepo extends JpaRepository<StudentDashboard, String>{

    @Query("select s from StudentDashboard s where s.block = ?1")
	public List<StudentDashboard> findByblock(String block);

    @Query("select count(s) from StudentDashboard s where s.block = ?1")
	public List<Integer> studentCount(String block);

}
