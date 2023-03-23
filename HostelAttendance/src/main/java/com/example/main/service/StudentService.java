package com.example.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.model.StudentDashboard;
import com.example.main.model.StudentUsers;
import com.example.main.repository.DashboardRepo;
import com.example.main.repository.StudentLoginRepo;

@Service
public class StudentService {
	
	@Autowired
	StudentLoginRepo repo1;
	@Autowired
	DashboardRepo repo2;
	
	public void post(StudentUsers S) {
		repo1.save(S);
	}
	
	public boolean logincheck(StudentUsers S) {
		
		if(repo1.existsById(S.getRollno())) {
			StudentUsers exists = repo1.getById(S.getRollno());
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
		repo2.save(S);
	}
	
	public Optional<StudentDashboard> getById(String rollno){
		return repo2.findById(rollno);
	}
	
	public List<StudentDashboard> readAll(){
		return repo2.findAll();
	}

}
