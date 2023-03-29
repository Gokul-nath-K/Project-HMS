package com.example.main.repository;

import java.util.List;

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

	@Query("select count(s) from SOSTable s where s.block = ?1 and s.isactive = false")
	public List<Integer> sosCount(String block);

}
