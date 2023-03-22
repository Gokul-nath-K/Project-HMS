package com.example.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.model.StudentDashboard;
import com.example.main.model.StudentUsers;
import com.example.main.service.ApiService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;


@RestController
@RequestMapping("/api/students")
public class ApiController {
	
	@Autowired
	ApiService service;
	
	@Operation(summary = "Creates a new Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Student created successfully"),
			     @ApiResponse(responseCode = "400",description = "Student is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/post")
	public String post(@RequestBody StudentUsers S) {
		service.post(S);
		return "Posted...!";
	}
	
	@Operation(summary = "Checks the Student trying to Login")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Student logged in successfully"),
			     @ApiResponse(responseCode = "400",description = "Student's credentials is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/logincheck")
	public boolean logincheck(@RequestBody StudentUsers S) {
		return service.logincheck(S);
	}
	
	@Operation(summary = "Creates a new Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Student created successfully"),
			     @ApiResponse(responseCode = "400",description = "Student is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/create")
	public String create(@RequestBody StudentDashboard S) {
		
		service.create(S);
		return "Profile Created...!";
	}
	
	@Operation(summary = "Get a Student with rollno")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Student successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/get/id={id}")
	public Optional<StudentDashboard> getbyId(@PathVariable String id){
		
		return service.getById(id);
	}
	
	@Operation(summary = "Get all the Students")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Students successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getall")
	public List<StudentDashboard> readAll(){
		
		return service.readAll();
	}

}
