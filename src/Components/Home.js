import React, {useEffect} from "react";
import {Container, Button} from "reactstrap"

const Home =() => {
    useEffect(()=>{
        document.title="Home || Courseo"
    },[])
    return (
        <div>
            <div className="jumbotron my-2">
                <div className="text-center my-5">
                    <h1 className="display-4" style={{ fontFamily: "AssistantRegular"}}>First Application</h1>
                    <p style={{fontFamily: "ui-serif"}}>This is developed by Manikanchan Roy, Shweta Laha, Souvik Debnath, Shaoni Bose for the betterment of the world and this nation.</p>
                    <Container>
                        <Button color="primary">Start Using my Application</Button>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Home