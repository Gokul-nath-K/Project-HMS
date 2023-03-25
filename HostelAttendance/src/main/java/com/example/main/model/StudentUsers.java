package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "student_users")
public class StudentUsers {

	@Id
	private String rollno;
	private String email;
	private String password;

	public String getRollno() {
		return rollno;
	}

	public void setRollno(String rollno) {
		this.rollno = rollno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public StudentUsers(String rollno, String email, String password) {
		super();
		this.rollno = rollno;
		this.email = email;
		this.password = password;
	}

	public StudentUsers() {
		super();
	}

}
