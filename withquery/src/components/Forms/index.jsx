// import React from 'react'
// import { CreateNewUser } from './CreateNewUser'
// import { useMutation } from '@tanstack/react-query'
// import { studentService } from '../../services/studentService'


// export const Forms=() =>{

//     return (
//         <div>SALAM TEST</div>
//     )
// const [userAction, setUserAction]= React.useState({
//     userTitle: "student",
//     isOpenModal: false,
// });

// const[userDatas, setUserDatas]= React.useState({});

// const {mutate: mutateCreateNewFunction } = useMutation({mutationFn()=>
//     studentService.CreateNewUser(userDatas)
// });

// const handleSubmit =()=>{
//     if (userAction.userTitle==="student"){
//         console.log(Test);
//     }
// }
// }









// ?_______________________________________
// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";

// import { useQuery } from "@tanstack/react-query";



// export const CreateNewUser=()=> {


//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
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


//       <Button type="submit">Create</Button>
//     </Form>
//   );
// }