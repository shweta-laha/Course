import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Container,
    Button,
} from 'reactstrap';

const Course =({course})=>{
    return (
        <div className="text-center">
            <Card>
                <CardBody>
                    <CardTitle><h3>{course.title}</h3></CardTitle>
                    <CardText>{course.description}</CardText>
                    <Container>
                        <Button color="danger ">Delete</Button>
                        <Button color="warning" style={{marginLeft:'5px'}}>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course