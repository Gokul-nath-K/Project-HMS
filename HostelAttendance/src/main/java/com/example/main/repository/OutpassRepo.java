package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.main.model.Outpass;

import jakarta.transaction.Transactional;

@Repository
public interface OutpassRepo extends JpaRepository<Outpass, Integer> {

	@Transactional
	@Query("select o from Outpass o where o.status = ?1")
	public List<Outpass> getAllPendingOutpass(@Param("status") String status);
	
	@Transactional
	@Query("select o from Outpass o where o.status != ?1")
	public List<Outpass> getAllOutpass(@Param("status") String status);
}	