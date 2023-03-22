package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.StudentUsers;

public interface ApiRepository extends JpaRepository<StudentUsers, String>{
	
}
