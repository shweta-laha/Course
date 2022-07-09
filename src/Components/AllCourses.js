import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios"
import base_url from "../api/bootapi";

const AllCourse =() =>{

    useEffect(()=>{
        document.title="All Courses || Courseo";
        getAllCoursesFromServer();
    },[]);
    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));
    }

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response);
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    const[courses,setCourses]=useState([
        {title:"Django",description:"This is a django course, which will let you learn django from beginning"},
        {title:"Java",description:"This is a Java course, which will let you learn Java from beginning"},
        {title:"C++",description:"This is a C++ course, which will let you learn C++ from beginning"},
    ]);
    return(
        <div className="text-center my-2">
            <h2><b>All Courses</b></h2>

            {courses.length>0
            ? courses.map((item)=><Course course={item} update={updateCourse} />)
            : "No courses"}
        </div>

    )
}

export default AllCourse