package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.main.model.AdminDashboard;
import com.example.main.model.AdminUsers;
import com.example.main.model.Outpass;
import com.example.main.model.Complaint;
import com.example.main.repository.AdminDashboardRepo;
import com.example.main.repository.AdminUsersRepo;
import com.example.main.repository.ComplaintRepo;
import com.example.main.repository.OutpassRepo;

@Service
public class AdminService {

	@Autowired
	AdminUsersRepo repo1;
	@Autowired
	AdminDashboardRepo repo2;
	@Autowired
	OutpassRepo op;
	@Autowired
	ComplaintRepo complaint;
	
	public void post(AdminUsers A) {
		repo1.save(A);
	}
	
	public boolean logincheck(AdminUsers A) {
		
		if(repo1.existsById(A.getAdmincode())) {
			AdminUsers exists = repo1.getById(A.getAdmincode());
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
		repo2.save(A);
	}
	
	public Optional<AdminDashboard> getById(String admincode){
		return repo2.findById(admincode);
	}
	
	public List<AdminDashboard> readAll(){
		return repo2.findAll();
	}

	public List<Outpass> getAllPendingOutpass(String status) {
		return op.getAllPendingOutpass(status);	
	}
	
	public List<Outpass> getAllOutpass(String status) {
		return op.getAllOutpass(status);	
	}

	public List<Outpass> sortbyoutdate() {

		return op.findAll(Sort.by("outdt"));
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
	
}
