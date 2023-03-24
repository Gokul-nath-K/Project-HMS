package com.example.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Transactional
@Entity
@Table(name = "outpass")
public class Outpass {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String name;
	public String rollno;
	public String block;
	public String roomno;
	public String outdt;
	public String indt;
	public String reason;
	public String status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRollno() {
		return rollno;
	}
	public void setRollno(String rollno) {
		this.rollno = rollno;
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
	public String getOutdt() {
		return outdt;
	}
	public void setOutdt(String outdt) {
		this.outdt = outdt;
	}
	public String getIndt() {
		return indt;
	}
	public void setIndt(String indt) {
		this.indt = indt;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Outpass(int id, String name, String rollno, String block, String roomno, String outdt, String indt,
			String reason, String status) {
		super();
		this.id = id;
		this.name = name;
		this.rollno = rollno;
		this.block = block;
		this.roomno = roomno;
		this.outdt = outdt;
		this.indt = indt;
		this.reason = reason;
		this.status = status;
	}
	
	public Outpass() {
		
	}
}
