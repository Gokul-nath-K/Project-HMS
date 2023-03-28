package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "sos_table")
public class SOSTable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String rollno;
	private String name;
	private String block;
	private String roomno;
	private String datetime;
	private boolean isactive;
	private String reason;
	public SOSTable() {
		 
	}
	public SOSTable(int id, String rollno, String name, String block, String roomno, String datetime, boolean isactive,
			String reason) {
		super();
		this.id = id;
		this.rollno = rollno;
		this.name = name;
		this.block = block;
		this.roomno = roomno;
		this.datetime = datetime;
		this.isactive = isactive;
		this.reason = reason;
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
	public String getRoomno() {
		return roomno;
	}
	public void setRoomno(String roomno) {
		this.roomno = roomno;
	}
	public String getDatetime() {
		return datetime;
	}
	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}
	public boolean isIsactive() {
		return isactive;
	}
	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}

}
