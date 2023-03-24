package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.model.AdminDashboard;
import com.example.main.model.AdminUsers;
import com.example.main.repository.AdminDashboardRepo;
import com.example.main.repository.AdminUsersRepo;

@Service
public class AdminService {

	@Autowired
	AdminUsersRepo repo1;
	@Autowired
	AdminDashboardRepo repo2;
	
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
	
}
