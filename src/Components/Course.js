import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Container,
    Button,
} from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course =({course, update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted");
                update(id);
            },
            (error)=>{
                toast.error("Course not Deleted");
            }
        )
    }
    return (
        <div className="text-center">
            <Card>
                <CardBody>
                    <CardTitle><h3>{course.title}</h3></CardTitle>
                    <CardText>{course.description}</CardText>
                    <Container>
                        <Button color="danger " onClick={()=>{
                            deleteCourse(course.id);
                        }}>Delete</Button>
                        <Button color="warning" style={{marginLeft:'5px'}}>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course