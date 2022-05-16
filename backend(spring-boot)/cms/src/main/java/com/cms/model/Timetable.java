package com.cms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "timetable")
public class Timetable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int timetableId;
	private String department;
	private String stream;
	private String batch;

	public int getTimetableId() {
		return timetableId;
	}

	public void setTimetableId(int timetableId) {
		this.timetableId = timetableId;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getStream() {
		return stream;
	}

	public void setStream(String stream) {
		this.stream = stream;
	}

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	public Timetable(String department, String stream, String batch) {
		super();
		this.department = department;
		this.stream = stream;
		this.batch = batch;
	}

	public Timetable() {
		super();
		// TODO Auto-generated constructor stub
	}

}