package com.cms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.model.Admin;
import com.cms.repo.AdminRepo;

@Service
public class AdminLoginService{
	
	@Autowired
	AdminRepo adminRepo;
	
	public Admin getAdminByAdmin(String username) {
		return adminRepo.findByAusername(username);
	}
}