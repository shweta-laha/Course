import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
  return (
    <Form style={{fontWeight:530}}>
        <h1 className="text-center my-3"><b>Contact Us</b></h1>
        <h4  className="text-center my-3">Looking to contact Courseo?</h4>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><b>Feedback</b></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TextControlsExample;