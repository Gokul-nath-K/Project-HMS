package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "admin_users")
public class AdminUsers {
	
	@Id
	private String admincode;
	private String email;
	private String password;
	
	public AdminUsers() {
		super();
	}
	public AdminUsers(String admincode, String email, String password) {
		super();
		this.admincode = admincode;
		this.email = email;
		this.password = password;
	}
	public String getAdmincode() {
		return admincode;
	}
	public void setAdmincode(String admincode) {
		this.admincode = admincode;
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

}
