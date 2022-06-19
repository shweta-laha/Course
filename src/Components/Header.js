import React from 'react';
import { Card,CardBody } from 'reactstrap';

function Header({name , title}){
    return (
        <div>
            <Card style={{backgroundColor:'black', color: 'white'}}>
                <CardBody><h1 className="text-center my-5"><img src="https://img.icons8.com/external-sketchy-juicy-fish/60/undefined/external-course-user-experience-sketchy-sketchy-juicy-fish.png"/>  Welcome to Courseo Application</h1></CardBody>
            </Card>
            
        </div>
    )
}

export default Header