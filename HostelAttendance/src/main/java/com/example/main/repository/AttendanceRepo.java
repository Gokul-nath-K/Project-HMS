package com.example.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.main.model.Attendance;

public interface AttendanceRepo extends JpaRepository<Attendance, Integer>{

    @Query("select a from Attendance a where a.block = ?1 and a.date = ?2")
	public List<Attendance> findByDate(String block,String date);

}
