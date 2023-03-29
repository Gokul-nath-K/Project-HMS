package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.main.model.Outpass;

public interface OutpassRepo extends JpaRepository<Outpass, Integer> {

	@Transactional
	@Query("select o from Outpass o where o.status = ?1")
	public List<Outpass> getAllPendingOutpass(@Param("status") String status);
	
	@Transactional
	@Query("select o from Outpass o where o.status != ?1")
	public List<Outpass> getAllOutpass(@Param("status") String status);
	
	@Modifying
	@Transactional
	@Query("UPDATE Outpass o SET o.status = :status where o.id = :id")
	public Integer updateOutpass(String status, int id);

	@Query("select count(o) from Outpass o where o.block = ?1 and o.status = 'pending'")
	public List<Integer> outpassCount(String block);

	@Query("select o from Outpass o where o.rollno = ?1")
	public List<Outpass> outpassHistory(String rollno);
}	