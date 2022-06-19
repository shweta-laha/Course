import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';
import { Button } from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';

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
    return(
        <>

<h2 className="text-center my-3"><b>Fill out the course details</b></h2>
       <Form>
       <Form.Label><b>Email address</b></Form.Label>
       <Form.Control type="email" placeholder="Enter email"  />
       
       <Form.Label><b>Course ID</b></Form.Label>
       <Form.Control type="email" placeholder="Enter  Course Id"  />

       <Form.Label><b>Course Title</b></Form.Label>
       <Form.Control type="email" placeholder="Enter Title"  />
       <br/>
        
       <Form.Label><b>Course Description</b></Form.Label>
      <Form.Control as="textarea" placeholder="Write Course Description" />


<br/>
      <Container className="text-center">
      <Button onClick={btnHandle} color="success" >Done </Button>
      <Button onClick={btnHandle2} color="warning ml-2" style={{marginLeft:'5px'}} >Clear </Button>
      </Container>
      </Form>

        </>
    )
 }
 export default AddCourse;