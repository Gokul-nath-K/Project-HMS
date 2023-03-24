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
import com.example.main.model.Outpass;
import com.example.main.service.AdminService;
import com.example.main.model.SOSTable;

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
	@GetMapping(produces = "application/json",value = "/get/id={id}")
	public Optional<AdminDashboard> getbyId(@PathVariable String id){
		
		return service.getById(id);
	}
	
	@Operation(summary = "Get all the Admins")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Admins successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/getall")
	public List<AdminDashboard> readAll(){
		
		return service.readAll();
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
	
	@Operation(summary = "Get the Complaints in sorted manner")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Complaints are sorted successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/sortbyfield/{field}/{ch}")
	public List<Complaint> sortbyfield(@PathVariable String field,@PathVariable int ch){
		
		return service.sortbyfield(field,ch);
	}

	@Operation(summary = "Get the Complaints in sortByGroup manner")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Complaints are sorted by group successfully"),
	              @ApiResponse(responseCode = "404",description = "Zero Entries")})
	@GetMapping(produces = "application/json",value = "/sortbyfield/{field1}/{field2}/{ch}")
	public List<Complaint> sortbygroup(@PathVariable String field1,@PathVariable String field2,@PathVariable int ch){
		
		return service.sortbygroup(field1,field2,ch);
	}

}
