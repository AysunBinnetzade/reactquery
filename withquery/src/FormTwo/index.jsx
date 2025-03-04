import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from '../roots/const';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export const FormTwo = ()=>{

//   const [showForm, setShowForm] = useState(false);
//   const [formType, setFormType] = useState("");


//   const handleClick = (e) => {
//     const isStudent = e.target.textContent.toLowerCase().includes("student");
//     setFormType(isStudent ? "Student" : "Teacher");
//     setShowForm(true); 
// };




  const navigate = useNavigate();
  const handleClick = (e) => {
const isStudentBtn = e.target.textContent.toLowerCase().includes("student");
navigate(isStudentBtn ? ROUTERS.STUDENTS.PATH : ROUTERS.TEACHER.PATH)
  }

  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={handleClick}>
        Student add
      </Button>
      <Button variant="secondary" size="lg" onClick={handleClick}>
        Teacher add
      </Button>

      {/* {showForm && (
                <div className="mt-3">
                    <h2>{formType} Form</h2>
      <Form>
        <Form.Group className="mb-3">
         <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="success" type="submit">
           Submit
       </Button>

            </Form>
                </div>
                )} */}
    </div>
  );
}