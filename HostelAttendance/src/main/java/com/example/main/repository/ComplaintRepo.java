package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.model.Complaint;

public interface ComplaintRepo extends JpaRepository<Complaint, Integer>{

}
