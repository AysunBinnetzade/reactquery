import React from 'react'
import Table from 'react-bootstrap/Table';
import { studentService } from '../../services/studentService';
import { useQuery } from '@tanstack/react-query';

import { CreateNewUser } from '../Forms/CreateNewUser';


export const Students =() =>{
    const{}= useQuery({
        queryKey : "GetStudetList",
        queryFn : "studentService"
    })

    return(    

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Point</th>

        </tr>
      </thead>

    </Table>

  );
}
