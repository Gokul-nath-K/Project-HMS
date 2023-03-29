package com.example.main.controller;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.model.AdminDashboard;
import com.example.main.model.Announcement;
import com.example.main.model.Complaint;
import com.example.main.model.Outpass;
import com.example.main.model.StudentDashboard;
import com.example.main.model.StudentUsers;
import com.example.main.service.StudentService;
import com.example.main.model.SOSTable;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;


@RestController
@CrossOrigin
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	StudentService service;
	
	@Operation(summary = "Creates a new Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Student created successfully"),
			     @ApiResponse(responseCode = "400",description = "Student's Credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/post")
	public String post(@RequestBody StudentUsers S) {
		service.post(S);
		return "Posted...!";
	}
	
	@Operation(summary = "Checks the Student trying to Login")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Student logged in successfully"),
			     @ApiResponse(responseCode = "400",description = "Student's credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/logincheck")
	public boolean logincheck(@RequestBody StudentUsers S) {
		return service.logincheck(S);
	}
	
	@Operation(summary = "Creates a new Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Student created successfully"),
			     @ApiResponse(responseCode = "400",description = "Student's Credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/create")
	public String create(@RequestBody StudentDashboard S) {
		
		service.create(S);
		return "Profile Created...!";
	}
	
	@Operation(summary = "Get a Student with rollno")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Student successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/get/{id}")
	public Optional<StudentDashboard> getbyId(@PathVariable("id") String id){
		
		return service.getById(id);
	}
	
	@Operation(summary = "Get all the Students")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Students successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getall")
	public List<StudentDashboard> readAll(){
		
		return service.readAll();
	}
	
	@Operation(summary = "Gets a Complaint/Query from a Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Complaint/Query received successfully"),
			     @ApiResponse(responseCode = "400",description = "NIL")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/complaint")
	public void postComplaint(@RequestBody Complaint C) {
		service.postComplaint(C);
	}

	@Operation(summary = "Gets Outpass Request from a Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Request received successfully"),
			     @ApiResponse(responseCode = "400",description = "NIL")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/outpass")
	public void postOutpass(@RequestBody Outpass O) {
		service.postOutpass(O);
	}
	

	@Operation(summary = "Gets a SOS Message from a Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "SOS Message received successfully"),
			     @ApiResponse(responseCode = "400",description = "NIL")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/SOS")
	public void postSOS(@RequestBody SOSTable S) {
		service.postSOS(S);
	}

	@Operation(summary = "Displays the Circular/Announcement to the Students")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Announcement/Circular successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Circular/Announcement")})
	@GetMapping(produces = "application/json",value = "/announcement")
	public List<Announcement> announcement(){
		
		return service.announcement();
	}

	@Operation(summary = "Displays Admin Record for a Student")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Admin Record successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getadmin/{id}")
	public List<AdminDashboard> getAdmin(@PathVariable String rollno){
		
		return service.getAdmin(rollno);
	}

	@Operation(summary = "Get a Student's Attendance % with rollno")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Student's Attendance % successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/getpercentage/{rollno}")
	public String getPercentage(@PathVariable String rollno){
		
		return  String.format("%.2f", service.getPercentage(rollno));
	}

	@Operation(summary = "Get a Student's Outpass History with rollno")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Student's Outpass History successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/outpasshistory/{rollno}")
	public List<Outpass> outpassHistory(@PathVariable String rollno){
		
		return service.outpassHistory(rollno);
	}
	
	@Operation(summary = "Get a Student's Complaint History with rollno")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Student's Complaint History successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/complainthistory/{rollno}")
	public List<Complaint> complaintHistory(@PathVariable String rollno){
		
		return service.complaintHistory(rollno);
	}

}
