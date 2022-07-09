import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Button, FormGroup, Input } from 'reactstrap';
import {ToastContainer,toast, collapseToast} from 'react-toastify';
import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import base_url from '../api/bootapi';

const btnHandle = () =>{
    toast.success("Done", {
      position:'top-center'
    });
  }

  const btnHandle2 = () =>{
    toast.success("Cleared", {
      position:'top-center'
    });
  }
 const AddCourse=()=>{
  useEffect(()=>{
    document.title="Add Courses || Courseo"
},[])  
const [course, setCourse]=useState({});

const handleForm=(e)=>{
  console.log(course);
  postDataToServer(course);
  e.preventDefault();
}

const postDataToServer=(data)=>{
  axios.post(`${base_url}/courses`,data).then(
    (response)=>{
      console.log(response);
      console.log("Success");
      toast.success("Course Successfully added");
    },
    (error)=>{
      console.log(error);
      console.log("Error");
      toast.error("Error!! Something Went Wrong!!")
    }
  )
}
    return <Fragment>
    <h1 className='text-center'><b>Fill Course Details</b></h1>
      <Form onSubmit={handleForm}>
      <FormGroup>
          <label for="userId"><b>Course Id</b></label>
          <Input 
            type='text'
            placeholder='Enter Here'
            id='userId'
            onChange={(e)=>{
              setCourse({...course, id: e.target.value})
            }}
          />
      </FormGroup>
      <FormGroup>
          <label for="title"><b>Course Title</b></label>
          <Input 
            type='text'
            placeholder='Enter Course Title'
            id='title'
            onChange={(e)=>{
              setCourse({...course, title: e.target.value})
            }}
          />
      </FormGroup>
      <FormGroup>
          <label for="description"><b>Course Description</b></label>
          <Input 
            type='textarea'
            placeholder='Enter Description'
            id='description'
            style={{height:150}}
            onChange={(e)=>{
              setCourse({...course, description: e.target.value})
            }}
          />
      </FormGroup>
      <Container className="text-center">
      <Button onClick={btnHandle} type="submit" color="success" >Add Course </Button>
      <Button onClick={btnHandle2} type="reset" color="warning ml-2" style={{marginLeft:'5px'}} >Clear </Button>
      </Container>
      </Form>
    </Fragment>
 }
 export default AddCourse;