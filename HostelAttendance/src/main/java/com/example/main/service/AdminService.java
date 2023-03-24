package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.main.model.AdminDashboard;
import com.example.main.model.AdminUsers;
import com.example.main.model.Outpass;
import com.example.main.model.SOSTable;
import com.example.main.model.Complaint;
import com.example.main.repository.AdminDashboardRepo;
import com.example.main.repository.AdminUsersRepo;
import com.example.main.repository.ComplaintRepo;
import com.example.main.repository.OutpassRepo;
import com.example.main.repository.SOSRepo;

@Service
public class AdminService {

	@Autowired
	AdminUsersRepo login;
	@Autowired
	AdminDashboardRepo profile;
	@Autowired
	ComplaintRepo complaint;
	@Autowired
	OutpassRepo outpass;
	@Autowired
	SOSRepo sos;
	
	public void post(AdminUsers A) {
		login.save(A);
	}
	
	public boolean logincheck(AdminUsers A) {
		
		if(login.existsById(A.getAdmincode())) {
			AdminUsers exists = login.getById(A.getAdmincode());
			if(exists.getEmail().equals(A.getEmail())) {
				if(exists.getPassword().equals(A.getPassword())) {
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
	
	public void create(AdminDashboard A) {
		profile.save(A);
	}
	
	public Optional<AdminDashboard> getById(String admincode){
		return profile.findById(admincode);
	}
	
	public List<AdminDashboard> readAll(){
		return profile.findAll();
	}

	public List<Outpass> getAllPendingOutpass(String status) {
		return outpass.getAllPendingOutpass(status);	
	}
	
	public List<Outpass> getAllOutpass(String status) {
		return outpass.getAllOutpass(status);	
	}

	public List<Outpass> sortbyoutdate() {

		return outpass.findAll(Sort.by("outdt"));
	}

	public List<Complaint> sortbyfield(String field, int ch) {
		if (ch == 0) {
			return complaint.findAll(Sort.by(field));
		} else {
			return complaint.findAll(Sort.by(field).descending());
		}
	}

	public List<Complaint> sortbygroup(String field1, String field2, int ch) {

		Sort Field1 = Sort.by(field1);
		Sort Field2 = Sort.by(field2);
		if (ch == 0) {
			return complaint.findAll(Field1.and(Field2));
		} else {
			return complaint.findAll(Field1.and(Field2).descending());
		}
	}

	public List<SOSTable> sosrequest() {

		return sos.findAll(Sort.by("datetime").ascending());
	}

	public void sosapproval(SOSTable S) {
		
		sos.sosapproval(S.getRollno());
	}
	
}
