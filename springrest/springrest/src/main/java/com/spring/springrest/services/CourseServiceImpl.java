package com.spring.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.springrest.dao.CourseDao;
import com.spring.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
//	List<Course> list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(1,"Java Core","We learn about basic java"));
//		list.add(new Course(2,"Spring Boot","Creating rest api with Spring Boot"));
	}

//	get all courses
	@Override
	public List<Course> getCourses() {
	
		return courseDao.findAll();
		
	}

//	get a single course
	@Override
	public Course getCourse(long courseId) {
		return courseDao.getOne(courseId);
	}

//	add a course
	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;
	}

//	update a course
	@Override
	public Course updateCourse(Course course) {
		
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		
	}

	

}
