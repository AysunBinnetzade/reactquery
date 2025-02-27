import React from 'react'
import Button from 'react-bootstrap/Button';

export const FormTwo = ({
    onClose,
    userTitle,
    onSubmit,
    handleGetUserInfo,
  }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    };
  return (
    <form onSubmit={handleSubmit} className="d-grid gap-2 m-5">

      <Button type="submit" size="lg" width>STUDENT ADD</Button>
      <Button type="submit" size="lg" width>TEACHER ADD</Button>
    </form>

    // <form onSubmit={handleSubmit}>
    //   <button type='submit'>STUDENT</button>
    // </form>
  );
}