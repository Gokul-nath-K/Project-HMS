package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.model.Complaint;
import com.example.main.model.SOSTable;
import com.example.main.model.StudentDashboard;
import com.example.main.model.StudentUsers;
import com.example.main.repository.ComplaintRepo;
import com.example.main.repository.DashboardRepo;
import com.example.main.repository.StudentLoginRepo;

@Service
public class StudentService {
	
	@Autowired
	StudentLoginRepo login;
	@Autowired
	DashboardRepo profile;
	@Autowired
	ComplaintRepo complaint;
	
	
	public void post(StudentUsers S) {
		login.save(S);
	}
	
	public boolean logincheck(StudentUsers S) {
		
		if(login.existsById(S.getRollno())) {
			StudentUsers exists = login.getById(S.getRollno());
			if(exists.getEmail().equals(S.getEmail())) {
				if(exists.getPassword().equals(S.getPassword())) {
					return true;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
	
	public void create(StudentDashboard S) {
		profile.save(S);
	}
	
	public Optional<StudentDashboard> getById(String rollno){
		return profile.findById(rollno);
	}
	
	public List<StudentDashboard> readAll(){
		return profile.findAll();
	}
	
	public void postComplaint(Complaint C) {
		
		SimpleDateFormat dateFormatter = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		SimpleDateFormat timeFormatter = new SimpleDateFormat("HH:mm:ss");
		Date time = new Date();
		C.setDate(dateFormatter.format(date));
		C.setTime(timeFormatter.format(time));
		complaint.save(C);
	}
	
	public List<Complaint> sortbyfield(String field,int ch){
		if(ch == 0) {
			return complaint.findAll(Sort.by(field));
		}
		else {
			return complaint.findAll(Sort.by(field).descending());
		}
	}

	public List<Complaint> sortbygroup(String field1,String field2,int ch){
		
		Sort Field1 = Sort.by(field1);
		Sort Field2 = Sort.by(field2);
		if(ch == 0) {
			return complaint.findAll(Field1.and(Field2));
		}
		else {
			return complaint.findAll(Field1.and(Field2).descending());
		}
	}

	public void postSOS(SOSTable S) {

		SimpleDateFormat dateFormatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date datetime = new Date();
		S.setDatetime(dateFormatter.format(datetime));
		sos.save(S);
	}

}
