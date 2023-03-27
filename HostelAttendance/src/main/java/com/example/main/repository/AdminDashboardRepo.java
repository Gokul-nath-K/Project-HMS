package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.main.model.AdminDashboard;

public interface AdminDashboardRepo extends JpaRepository<AdminDashboard, String>{

    @Query("select a from AdminDashboard a where a.block = ?1")
	public List<AdminDashboard> getadmin(String block);

}
