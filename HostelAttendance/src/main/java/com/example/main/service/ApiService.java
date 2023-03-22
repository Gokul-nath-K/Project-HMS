package com.example.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.model.StudentUsers;
import com.example.main.repository.ApiRepository;

@Service
public class ApiService {
	
	@Autowired
	ApiRepository repo;
	
	public void post(StudentUsers S) {
		repo.save(S);
	}
	
	public boolean logincheck(StudentUsers S) {
		
		if(repo.existsById(S.getRollno())) {
			StudentUsers exists = repo.getById(S.getRollno());
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

}
