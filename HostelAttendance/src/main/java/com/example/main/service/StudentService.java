package com.example.main.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.main.model.AdminDashboard;
import com.example.main.model.Announcement;
import com.example.main.model.Complaint;
import com.example.main.model.Outpass;
import com.example.main.model.SOSTable;
import com.example.main.model.StudentDashboard;
import com.example.main.model.StudentUsers;
import com.example.main.repository.AdminDashboardRepo;
import com.example.main.repository.AnnouncementRepo;
import com.example.main.repository.AttendanceRepo;
import com.example.main.repository.ComplaintRepo;
import com.example.main.repository.DashboardRepo;
import com.example.main.repository.OutpassRepo;
import com.example.main.repository.SOSRepo;
import com.example.main.repository.StudentLoginRepo;

@Service
public class StudentService {
	
	@Autowired
	StudentLoginRepo login;
	@Autowired
	DashboardRepo profile;
	@Autowired
	ComplaintRepo complaint;
	@Autowired
	SOSRepo sos;
	@Autowired
	OutpassRepo outpass;
	@Autowired
	AnnouncementRepo announcement;
	@Autowired
	AdminDashboardRepo admin;
	@Autowired
	AttendanceRepo attendance;
	
	
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

	public void postOutpass(Outpass O){
		outpass.save(O);
	}

	public List<Announcement> announcement(){
		
		return announcement.findAll(Sort.by("date").and(Sort.by("time")).descending());
	}

	public List<AdminDashboard> getAdmin(String rollno){
		
		StudentDashboard s = profile.getById(rollno);
		return admin.getadmin(s.getBlock());
	}

	public double getPercentage(String rollno){
		
		List<Float> noOfPresent = attendance.getPercentage(rollno);
		List<Float> totalDays = attendance.getDays();
		
		return ( noOfPresent.get(0)/totalDays.get(0) ) * 100.00 ;
	}

	public List<Outpass> outpassHistory(String rollno) {

		return outpass.outpassHistory(rollno);
	}

	public List<Complaint> complaintHistory(String rollno) {

		return complaint.complaintHistory(rollno);
	}

}
