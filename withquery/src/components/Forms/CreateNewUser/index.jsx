// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";

// export const CreateNewUser = ({
//   onClose,
//   userTitle,
//   onSubmit,
//   handleGetUserInfo,
// }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit();
//   };

//   return (
//     <Form  onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             onChange={handleGetUserInfo}
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             onChange={handleGetUserInfo}
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               onChange={handleGetUserInfo}
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.

//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control
//             onChange={handleGetUserInfo}
//             type="text"
//             placeholder="City"
//             required
//           />

//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control
//             onChange={handleGetUserInfo}
//             type="text"
//             placeholder="State"
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control
//             onChange={handleGetUserInfo}
//             type="text"
//             placeholder="Zip"
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// };

// export default FormExample;
// ?_______________________________


// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import { useQuery } from "@tanstack/react-query";

// export const CreateNewUser = () => {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

// };

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Students } from "../../Students";
// import { useQuery } from "@tanstack/react-query";

const initialInfputValue =({
    firstname: "",
    lastname: "",
    email: "",
    point:""
});

export const CreateNewUser = () => {

const [inputsValue, setInputsValue] = React.useState (initialInfputValue);

const handleChangeInputValue = ({ tatrge: {value , name} })=> {
    setInputsValue ({...inputsValue, [name]:value});
};



  return (
    <Form noValidate  >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required 
          type="text" 
          name="firstname"
          placeholder="First name" />
                    onChange={handleChangeInputValue}

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required 
          type="text" 
          name="lastname"
          placeholder="Last name" />
          onChange={handleChangeInputValue}
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Point</Form.Label>
          <Form.Control required 
          type="text" 
          name="point"
          placeholder="Point" />
                    onChange={handleChangeInputValue}

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChangeInputValue}

              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button onClick={()=>{
        console.log("Input value", inputsValue);
      }}>

        ADD
        </Button>
        <Students inputsValue={inputsValue}/>
    </Form>
  );
};
