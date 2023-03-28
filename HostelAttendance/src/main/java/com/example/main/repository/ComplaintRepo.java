package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.main.model.Complaint;

import jakarta.transaction.Transactional;

public interface ComplaintRepo extends JpaRepository<Complaint, Integer>{

    @Query("select count(c) from Complaint c where c.block = ?1 and c.status = 'pending'")
	public List<Integer> complaintsCount(String block);

	@Transactional
	@Modifying
	@Query("UPDATE Complaint c SET c.status = 'seen' WHERE c.rollno = ?1")
	public void complaintapproval(String rollno);

}
