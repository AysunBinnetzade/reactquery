import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const CreateNewStudent = () => {
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState(""); // Track form type (Student/Teacher)

    const handleClick = (e) => {
        const isStudent = e.target.textContent.toLowerCase().includes("student");
        setFormType(isStudent ? "Student" : "Teacher");
        setShowForm(true); // Show form
    };

    return (
        <div className="d-grid gap-2">
            {/* Buttons */}
            <Button variant="primary" size="lg" onClick={handleClick}>
                Student Add
            </Button>
            <Button variant="secondary" size="lg" onClick={handleClick}>
                Teacher Add
            </Button>

            {/* Conditionally Render Form */}
            {showForm && (
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
            )}
        </div>
    );
};
