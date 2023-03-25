package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "announcement")
public class Announcement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String admincode;
	private String name;
	private String circular;
	private String date;
	private String time;
	public Announcement() {
		
	}
	public Announcement(int id, String admincode, String name, String circular, String date, String time) {
		super();
		this.id = id;
		this.admincode = admincode;
		this.name = name;
		this.circular = circular;
		this.date = date;
		this.time = time;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getCircular() {
		return circular;
	}
	public void setCircular(String circular) {
		this.circular = circular;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}

}
