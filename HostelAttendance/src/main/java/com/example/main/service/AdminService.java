package com.example.main.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.main.model.AdminDashboard;
import com.example.main.model.AdminUsers;
import com.example.main.model.Announcement;
import com.example.main.model.Attendance;
import com.example.main.model.Outpass;
import com.example.main.model.SOSTable;
import com.example.main.model.StudentDashboard;
import com.example.main.model.Complaint;
import com.example.main.repository.AdminDashboardRepo;
import com.example.main.repository.AdminUsersRepo;
import com.example.main.repository.AnnouncementRepo;
import com.example.main.repository.AttendanceRepo;
import com.example.main.repository.ComplaintRepo;
import com.example.main.repository.DashboardRepo;
import com.example.main.repository.OutpassRepo;
import com.example.main.repository.SOSRepo;

import jakarta.transaction.Transactional;

@Service
public class AdminService {

	@Autowired
	AdminUsersRepo login;
	@Autowired
	AdminDashboardRepo profile;
	@Autowired
	DashboardRepo student;
	@Autowired
	ComplaintRepo complaint;
	@Autowired
	OutpassRepo outpass;
	@Autowired
	SOSRepo sos;
	@Autowired
	AnnouncementRepo announcement;
	@Autowired
	AttendanceRepo attendance;

	public void post(AdminUsers A) {
		login.save(A);
	}

	public boolean logincheck(AdminUsers A) {

		if (login.existsById(A.getAdmincode())) {
			AdminUsers exists = login.getById(A.getAdmincode());
			if (exists.getEmail().equals(A.getEmail())) {
				if (exists.getPassword().equals(A.getPassword())) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	public void create(AdminDashboard A) {
		profile.save(A);
	}

	public Optional<AdminDashboard> getById(String admincode) {
		return profile.findById(admincode);
	}

	public List<Outpass> getAllPendingOutpass(String status) {
		return outpass.getAllPendingOutpass(status);
	}

	public List<Outpass> getAllOutpass(String status) {
		return outpass.getAllOutpass(status);
	}

	@Transactional
	public String updateOutpass(String status, int id) {

		// return op.updateOutpass(status, id);

		Outpass updateOutpass = outpass.findById(id).get();

		if (updateOutpass == null) {
			return "No updates";
		}

		else {
			updateOutpass.setStatus(status);
			outpass.save(updateOutpass);
			return "Updated";
		}

	}

	public List<Outpass> sortbyoutdate() {

		return outpass.findAll(Sort.by("outdt"));
	}

	public List<Complaint> sortbypending(String block) {

		List<Complaint> list = complaint.findAll(Sort.by("date").and(Sort.by("time")));
		List<Complaint> sortedList = new ArrayList<>();
		for (Complaint C : list) {
			if(C.getBlock().equals(block) && C.getStatus().equals("pending")){
				sortedList.add(C);
			}
		}

		return sortedList;

	}

	public List<Complaint> sortbyview(String block) {

		List<Complaint> list = complaint.findAll(Sort.by("date").and(Sort.by("time")).descending());

		List<Complaint> sortedList = new ArrayList<>();
		for (Complaint C : list) {
			if(C.getBlock().equals(block) && (C.getStatus().equals("Solved") || C.getStatus().equals("Rejected")) ){
				sortedList.add(C);
			}
		}

		return sortedList;
	}

	public List<SOSTable> sosrequest() {

		return sos.findAll(Sort.by("datetime").ascending());
	}

	public void sosapproval(SOSTable S) {

		sos.sosapproval(S.getRollno());
	}

	public void complaintapproval(String status, int id) {

		complaint.complaintapproval(status, id);
	}

	public void announcement(Announcement A) {

		SimpleDateFormat dateFormatter = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		SimpleDateFormat timeFormatter = new SimpleDateFormat("hh:mm aa");
		Date time = new Date();
		A.setDate(dateFormatter.format(date));
		A.setTime(timeFormatter.format(time));
		announcement.save(A);
	}

	public void postattendance(Attendance A[]) {
		
		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();

		for(Attendance a : A) {
			
			a.setDate(dateFormatter.format(date));
			attendance.save(a	);
		}
	}

	public List<StudentDashboard> getattendance(String admincode) {

		AdminDashboard A = profile.getById(admincode);
		return student.findByblock(A.getBlock());
	}

	public List<Attendance> attendanceHistory(String date, String admincode) {

		AdminDashboard A = profile.getById(admincode);
		return attendance.findByDate(A.getBlock(), date);

	}

	public List<Integer> studentsCount(String admincode) {

		AdminDashboard A = profile.getById(admincode);
		return student.studentCount(A.getBlock());
	}

	public List<Integer> complaintsCount(String admincode) {

		AdminDashboard A = profile.getById(admincode);
		return complaint.complaintsCount(A.getBlock());
	}

	public List<Integer> sosCount(String admincode) {

		AdminDashboard A = profile.getById(admincode);
		return sos.sosCount(A.getBlock());
	}

	public List<Integer> outpassCount(String admincode) {

		AdminDashboard A = profile.getById(admincode);
		return outpass.outpassCount(A.getBlock());
	}

}
