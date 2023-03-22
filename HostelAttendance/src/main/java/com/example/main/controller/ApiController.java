package com.example.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.model.StudentUsers;
import com.example.main.service.ApiService;


@RestController
public class ApiController {
	
	@Autowired
	ApiService service;
	
	@PostMapping("/post")
	public String post(@RequestBody StudentUsers S) {
		service.post(S);
		return "Posted...!";
	}
	
	@PostMapping("/logincheck")
	public boolean logincheck(@RequestBody StudentUsers S) {
		return service.logincheck(S);
	}

}
