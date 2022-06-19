import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from 'react-router-dom'
const Menus=()=>{
    return(
<ListGroup style={{border:'5px', backgroundColor:"green"}} className="my-2" >
      
      <Link style={{ background:"linear-Gradient(rgba(19, 255, 15,0.4), rgb(255, 243, 130))"}} className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
      <Link   className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add  Course</Link>
      <Link   style={{ background:"linear-Gradient(rgba(19, 255, 15,0.4), rgb(255, 243, 130))"}} className="list-group-item list-group-item-action" tag="a" to="view-course" action>View Courses</Link>
      <Link  className="list-group-item list-group-item-action" tag="a" to="about" action>About</Link>
      <Link  style={{ background:"linear-Gradient(rgba(19, 255, 15,0.4), rgb(255, 243, 130))"}} className="list-group-item list-group-item-action" tag="a" to="contact" action> Contact</Link>
    </ListGroup>
    );
};
export default Menus;