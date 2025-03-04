import React from 'react'
import Table from 'react-bootstrap/Table';
import { studentService } from '../../services/studentService';
import { useQuery } from '@tanstack/react-query';
import { CreateNewUser } from '../Forms/CreateNewUser';

export const Students =() =>{

    const{data: studentsList , isLoading}= useQuery({
        queryKey : ["GetStudetList"],
        queryFn : studentService.getAllStudentList,
    });

if (isLoading || !studentsList) {
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
          <th>Point</th>
        </tr>
      </thead>
      <tbody>{studentsList?.data?.map((items) =>(
                <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.firstname}</td>
                <td>{items.lastname}</td>
                <td>{items.point}</td>
                <td>{items.email}</td>

              </tr>
      ))}

      </tbody>
    </Table>
// new_______________________________________________new


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
//           <Form.Label>Point</Form.Label>
//           <Form.Control required type="text" placeholder="Point" />
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

//       <Button type="submit">student add</Button>
//     </Form> */}

    

  );
}
