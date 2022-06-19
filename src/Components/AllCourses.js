import React, { useState } from "react";
import Course from "./Course";

const AllCourse =() =>{

    const[courses,setCourses]=useState([
        {title:"Django",description:"This is a django course, which will let you learn django from beginning"},
        {title:"Java",description:"This is a Java course, which will let you learn Java from beginning"},
        {title:"C++",description:"This is a C++ course, which will let you learn C++ from beginning"},
    ]);
    return(
        <div className="text-center my-2">
            <h2><b>All Courses</b></h2>

            {courses.length>0
            ? courses.map((item)=><Course course={item} />)
            : "No courses"}
        </div>

    )
}

export default AllCourse