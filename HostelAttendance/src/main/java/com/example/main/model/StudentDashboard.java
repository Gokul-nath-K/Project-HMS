package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "student_dashboard")
public class StudentDashboard {
	
	@Id
	private String rollno;
	private String name;
	private String email;
	private String dept;
	private int year;
	private String block;
	private String dob;
	private int roomno;
	private String bloodgroup;
	private long personal_phone;
	private long guardian_phone;
	public StudentDashboard() {
		
	}
	public StudentDashboard(String rollno, String name, String email, String dept, int year, String block, int roomno,
			String bloodgroup, long personal_phone, long guardian_phone,String dob) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.email = email;
		this.dept = dept;
		this.year = year;
		this.block = block;
		this.roomno = roomno;
		this.bloodgroup = bloodgroup;
		this.personal_phone = personal_phone;
		this.guardian_phone = guardian_phone;
		this.dob = dob;
	}
	public String getRollno() {
		return rollno;
	}
	public void setRollno(String rollno) {
		this.rollno = rollno;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getBlock() {
		return block;
	}
	public void setBlock(String block) {
		this.block = block;
	}
	public int getRoomno() {
		return roomno;
	}
	public void setRoomno(int roomno) {
		this.roomno = roomno;
	}
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	public long getPersonal_phone() {
		return personal_phone;
	}
	public void setPersonal_phone(long personal_phone) {
		this.personal_phone = personal_phone;
	}
	public long getGuardian_phone() {
		return guardian_phone;
	}
	public void setGuardian_phone(long guardian_phone) {
		this.guardian_phone = guardian_phone;
	}

}
