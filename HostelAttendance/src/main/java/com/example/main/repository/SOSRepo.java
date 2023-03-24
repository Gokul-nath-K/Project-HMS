package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.main.model.SOSTable;

import jakarta.transaction.Transactional;

public interface SOSRepo extends JpaRepository<SOSTable, Integer> {

	@Transactional
	@Modifying
	@Query("UPDATE SOSTable s SET s.isactive = true WHERE s.rollno = ?1")
	public void sosapproval(String rollno);

}
