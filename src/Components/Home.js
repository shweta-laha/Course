import React from "react";
import {Container, Button} from "reactstrap"

const Home =() => {
    return (
        <div>
            <div className="jumbotron">
                <div className="text-center">
                    <h1 className="display-3">First Application</h1>
                    <p>This is developed by M.Roy for the betterment of the world and this nation.</p>
                    <Container>
                        <Button color="primary">Start Using my Application</Button>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Home