import React from "react";
import { Segment, Message, Button, Form } from "semantic-ui-react";
export default function Contact() {
  return (
    <Segment className="contact">
      <h1>Contact Page</h1>
      <Form>
        <Form.Input label="Email" placeholder="email@email.com" />
        <Message header="" content="" />
        <Button>Submit</Button>
      </Form>
    </Segment>
  );
}
