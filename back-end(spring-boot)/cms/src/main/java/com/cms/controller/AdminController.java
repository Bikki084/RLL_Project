package com.cms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.model.Admin;
import com.cms.service.AdminLoginService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")

public class AdminController {

	@Autowired
	private AdminLoginService repo;

	@PostMapping("/login")
	public ResponseEntity<?> adminLogin(@RequestBody Admin adminData) {

		Admin admin = repo.getAdminByAdmin(adminData.getAusername());
		if (admin.getApassword().equals(adminData.getApassword()))
			return ResponseEntity.ok(admin);
     
		return (ResponseEntity<?>) ResponseEntity.internalServerError();

	}

}