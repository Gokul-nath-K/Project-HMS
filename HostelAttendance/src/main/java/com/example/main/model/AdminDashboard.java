package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "admin_dashboard")
public class AdminDashboard {
	
	@Id
	private String admincode;
	private String name;
	private String email;
	private String block;
	private String bloodgroup;
	private long personal_phone;
	public AdminDashboard() {
		
	}
	public AdminDashboard(String admincode, String name, String email, String block, String bloodgroup,
			long personal_phone) {
		super();
		this.admincode = admincode;
		this.name = name;
		this.email = email;
		this.block = block;
		this.bloodgroup = bloodgroup;
		this.personal_phone = personal_phone;
	}
	public String getAdmincode() {
		return admincode;
	}
	public void setAdmincode(String admincode) {
		this.admincode = admincode;
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
	public String getBlock() {
		return block;
	}
	public void setBlock(String block) {
		this.block = block;
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

}
