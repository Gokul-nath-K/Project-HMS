package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "attendance")
public class Attendance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String rollno;
	private String name;
	private String block;
	private int roomno;
	private String status;
	private String date;
	public Attendance() {
		
	}
	public Attendance(int id, String rollno, String name,String block,int roomno, String status, String date) {
		super();
		this.id = id;
		this.rollno = rollno;
		this.name = name;
		this.block = block;
		this.roomno = roomno;
		this.status = status;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRollno() {
		return rollno;
	}
	public void setRollno(String rollno) {
		this.rollno = rollno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBlock() {
		return block;
	}
	public void setBlock(String block) {
		this.block = block;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getRoomno() {
		return roomno;
	}
	public void setRoomno(int roomno) {
		this.roomno = roomno;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

}
