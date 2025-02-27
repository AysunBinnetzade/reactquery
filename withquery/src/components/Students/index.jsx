import React from 'react'
import Table from 'react-bootstrap/Table';
import { studentService } from '../../services/studentService';
import { useQuery } from '@tanstack/react-query';
import { CreateNewUser } from '../Forms/CreateNewUser';


import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";


export const Students =() =>{

React.useEffect (()=>{
studentService.getAllStudentList().then((data)=>{
console.log("data");})
})


    const{}= useQuery({
        queryKey : "GetStudetList",
        queryFn : "studentService"
    })

      const [validated, setValidated] = useState(false);
    
      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return(    

<Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Point</Form.Label>
          <Form.Control required type="text" placeholder="Point" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button type="submit">student add</Button>
    </Form>

  );
}
