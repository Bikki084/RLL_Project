package com.cms.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;

import com.cms.model.Admin;
import com.cms.model.Faculty;
import com.cms.model.Library;
import com.cms.model.Student;
import com.cms.service.AdminLoginService;
import com.cms.service.StudentLoginService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")

public class AdminController {

	@Autowired
	private AdminLoginService repo;

//	admin can login in the admin-dashboard
	@PostMapping("/login")
	public ResponseEntity<?> adminLogin(@RequestBody Admin adminData) {

		Admin admin = repo.getAdminByAdmin(adminData.getAusername());
		if (admin.getApassword().equals(adminData.getApassword()))
			return ResponseEntity.ok(admin);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();

	}

//	Mthods for Students

//	R view list of all the students
//	admin can view all the profile of students 
	@GetMapping("/students")
	public List<Student> listStudents() {
		return repo.getAllStudent();
	}

//	C add student
//	admin can add a profile of student
	@PostMapping("/students")
	public Student addStudent(@RequestBody Student student) {
		return repo.addNewStudent(student);
	}

//	D delete student
//	admin can delete the profile of student
	@DeleteMapping("/students")
	public void removeStudent(@RequestBody Student student) {
		repo.removeStudentDetails(student);
	}

	@GetMapping(value = "/students", params = { "susername" })
	public ResponseEntity<?> student(@RequestParam String susername) {
		return ResponseEntity.ok(repo.getStudentById(susername));
	}

//	U update student
//	admin can update student's profile
	@PutMapping("/students")
	public ResponseEntity<?> update(@RequestBody Student student) {
		Student old = repo.getStudentById(student.getSusername());
//		old.setBatch(student.getBatch());
//		old.setContact_no(student.getContact_no());
//		old.setName(student.getName());
//		old.setParent_details(student.getParent_details());
//		old.setSpassword(student.getSpassword());
//		old.setStream(student.getStream());

		if (old != null) {
			return ResponseEntity.ok(repo.addNewStudent(student));
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

//	Methods for Faculties

//	R get the list of all faculty
	@GetMapping("/faculty-list")
	public List<Faculty> listFaculty() {
		return repo.getAllFaculty();
	}

//	C add faculty
	@PostMapping("/add-faculty")
	public Faculty addFaculty(@RequestBody Faculty faculty) {
		return repo.addNewFaculty(faculty);
	}

//	D delete faculty
//	admin can delete the profile of faculty
	@DeleteMapping("/delete-faculty")
	public void removeFaculty(@RequestBody Faculty faculty) {
		repo.removeFacultyDetails(faculty);
	}

//	U update faculty
//	admin can update profile of Faculty
	@PutMapping("/update-faculty")
	public ResponseEntity<?> update(@RequestBody Faculty faculty) {
		Faculty old = repo.getFacultyById(faculty.getFusername());
		if (old != null) {
			return ResponseEntity.ok(repo.updateFaculty(faculty));
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

//	Methods for Librarian
//	R get the list of all librarian
	@GetMapping("/library-list")
	public List<Library> listLibrary() {
		return repo.getAllLibrary();
	}

//	C add librarian
	@PostMapping("/add-library")
	public Library addLibrary(@RequestBody Library library) {
		return repo.addNewLibrary(library);
	}

//	D delete library
//	admin can delete the profile of librarian
	@DeleteMapping("/delete-library")
	public void removeLibrary(@RequestBody Library library) {
		repo.removeLibraryDetails(library);
	}

//	U update librarian
//	admin can update profile of librarian
	@PutMapping("/update-library")
	public ResponseEntity<?> update(@RequestBody Library library) {
		Library old = repo.getLibraryById(library.getLusername());
		if (old != null) {
			return ResponseEntity.ok(repo.updateLibrary(library));
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

}
