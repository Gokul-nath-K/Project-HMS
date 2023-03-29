package com.example.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.model.AdminDashboard;
import com.example.main.model.Complaint;
import com.example.main.model.AdminUsers;
import com.example.main.model.Announcement;
import com.example.main.model.Attendance;
import com.example.main.model.Outpass;
import com.example.main.service.AdminService;
import com.example.main.model.SOSTable;
import com.example.main.model.StudentDashboard;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@Operation(summary = "Creates a new Admin")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Admin created successfully"),
			     @ApiResponse(responseCode = "400",description = "Admin's Credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/post")
	public String post(@RequestBody AdminUsers A) {
		service.post(A);
		return "Posted...!";
	}
	
	@Operation(summary = "Checks the Admin trying to Login")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Admin logged in successfully"),
			     @ApiResponse(responseCode = "400",description = "Admin's credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/logincheck")
	public boolean logincheck(@RequestBody AdminUsers A) {
		return service.logincheck(A);
	}
	
	@Operation(summary = "Creates a new Admin")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Admin created successfully"),
			     @ApiResponse(responseCode = "400",description = "Admin's Credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/create")
	public String create(@RequestBody AdminDashboard A) {
		
		service.create(A);
		return "Profile Created...!";
	}
	
	@Operation(summary = "Get a Admin with admincode")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Admin successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/get/{id}")
	public Optional<AdminDashboard> getbyId(@PathVariable String id){
		
		return service.getById(id);
	}
	
	@Operation(summary = "Get all the pending outpasses")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting pending outpass successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getallpendingoutpass")
	public List<Outpass> getAllPendingOutpass(@RequestParam String status){
		
		return service.getAllPendingOutpass(status);
	}
	
	@Operation(summary = "Get all the outpasses")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting outpass history successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getalloutpass")
	public List<Outpass> getAllOutpass(@RequestParam String status){
		
		return service.getAllOutpass(status);
	}
	
	@Operation(summary = "update outpass status")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "outpass status updated successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@PutMapping(produces = "application/json",value = "/updateoutpass")
	public String updateOutpass(@RequestParam String status, @RequestParam int id){
		
		return service.updateOutpass(status, id) + " one record updated";
	}

	@Operation(summary = "Get the Outpass Requests in sorted manner")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Requests are sorted successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/sortbyoutdate")
	public List<Outpass> sortbyoutdate(){
		
		return service.sortbyoutdate();
	}
	
	@Operation(summary = "Get the Pending Complaints in sorted manner")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Complaints are sorted successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/sortbypending/{block}")
	public List<Complaint> sortbypending(@PathVariable String block){
		
		return service.sortbypending(block);
	}

	@Operation(summary = "Get the Viewed Complaints in sorted manner")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Complaints are sorted successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/sortbyview/{block}")
	public List<Complaint> sortbyview(@PathVariable String block){
		
		return service.sortbyview(block);
	}

	@Operation(summary = "Gets all the SOS Requests")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Requests are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/sosrequest")
	public List<SOSTable> sosrequest(){
		
		return service.sosrequest();
	}
	
	@Operation(summary = "Reviews the SOS Request")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Requests are approved/inprogress"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@PutMapping(produces = "application/json",value = "/sosrequest")
	public void sosapproval(@RequestBody SOSTable S){
		
		service.sosapproval(S);
	}

	@Operation(summary = "Reviews the Complaints Request")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Requests are approved/pending"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@PutMapping(produces = "application/json",value = "/complaint")
	public void complaintapproval(@RequestParam String status, @RequestParam int id){
		
		service.complaintapproval(status, id);
	}

	@Operation(summary = "Creates a Circular/Announcement to the Students")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Circular/Announcement created successfully"),
			     @ApiResponse(responseCode = "400",description = "Entriels are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/announcement")
	public void announcement(@RequestBody Announcement A) {
		
		service.announcement(A);
	}

	@Operation(summary = "Creates a new record of Attendance")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Attendance created successfully"),
			     @ApiResponse(responseCode = "400",description = "Credentials are invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(consumes = "application/json",value = "/postattendance")
	public void postattendance(@RequestBody Attendance A[]) {
		service.postattendance(A);
	}
	
	@Operation(summary = "Gets all the Students for marking Attendance")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Credentials are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getattendance/{id}")
	public List<StudentDashboard> getattendance(@PathVariable String id){
		
		return service.getattendance(id);
	}

	@Operation(summary = "Gets all the Students for History of Attendance")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Credentials are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Date")})
	@GetMapping(produces = "application/json",value = "/history/{date}/{id}")
	public List<Attendance> attendanceHistory(@PathVariable String date ,@PathVariable String id){
		
		return service.attendanceHistory(date,id);
	}

	@Operation(summary = "Gets the count of Students")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Credentials are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid")})
	@GetMapping(produces = "application/json",value = "/studentscount/{admincode}")
	public List<Integer> studentsCount(@PathVariable String admincode){
		
		return service.studentsCount(admincode);
	}
	
	@Operation(summary = "Gets the count of Complaints")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Credentials are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid")})
	@GetMapping(produces = "application/json",value = "/complaintscount/{admincode}")
	public List<Integer> complaintsCount(@PathVariable String admincode){
		
		return service.complaintsCount(admincode);
	}
	
	@Operation(summary = "Gets the count of SOS Requests")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Credentials are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid")})
	@GetMapping(produces = "application/json",value = "/soscount/{admincode}")
	public List<Integer> sosCount(@PathVariable String admincode){
		
		return service.sosCount(admincode);
	}
	
	@Operation(summary = "Gets the count of Outpass")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Credentials are displayed successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid")})
	@GetMapping(produces = "application/json",value = "/outpasscount/{admincode}")
	public List<Integer> outpassCount(@PathVariable String admincode){
		
		return service.outpassCount(admincode);
	}

}
