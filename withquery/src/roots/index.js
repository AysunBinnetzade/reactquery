import React from 'react'
import { ROUTERS } from './const'
import { MainPage } from '../components/MainPage';
import { Route, Routes } from 'react-router-dom';
import { FormTwo } from '../FormTwo'; 
import { Students } from '../components/Students';
import { Teachers } from '../components/Teachers';
// import { FormPage } from '../../form';
// import { CreateNewStudent } from '../components/Forms/CreateNewStudent';

export const ROUTER = () =>{
    return ( 
    <Routes>   
    <Route path={ROUTERS.PATH} element={<MainPage />} />
    <Route path={ROUTERS.STUDENTS.PATH} element={<Students />} />
    <Route path={ROUTERS.TEACHER.PATH} element={<Teachers />} />

    <Route path={ROUTERS.FORM} element={<FormTwo/>} />


    </Routes> 
    );
};


