import React from 'react'
import Table from 'react-bootstrap/Table';
import { teacherService } from '../../services/teacherService';
import { useQuery } from '@tanstack/react-query';

// import { CreateNewUser } from '../Forms/CreateNewUser';
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";


export const Teachers =() =>{
    const{data: teacherList , isLoading}= useQuery({
        queryKey : ["GetTeacherList"],
        queryFn : teacherService.getAllTeacherList,
    });
    

      // const [validated, setValidated] = useState(false);
    
      // const handleSubmit = (event) => {
      //             event.preventDefault();
// ! ASAGI BAXILMALI
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }
    
        // setValidated(true);
      // };


      if (isLoading || !teacherList) {
        return <>Loading...</>
      }

    return(    

      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Speciality</th>
        </tr>
      </thead>
      <tbody>{teacherList?.data?.map((item) =>(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Surname}</td>
                <td>{item.Speciality}</td>
                <td>{item.Email}</td>

              </tr>
      ))}

      </tbody>
    </Table>


// {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control required type="text" placeholder="First name" />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control required type="text" placeholder="Last name" />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>Specialty</Form.Label>
//           <Form.Control required type="text" placeholder="Specialty" />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Email</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Email"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>

//       <Button type="submit">teacher add</Button>
//     </Form> */}

  );
}
