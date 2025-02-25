import React from 'react'
import { ROUTERS } from './const'
import { MainPage } from '../components/MainPage';
import { Route, Routes } from 'react-router-dom';
import { Forms } from '../components/Forms';
import { PermissionsRouter } from './PermissionsRouter';
import { Students } from '../components/Students';

export const ROUTER = () =>{
    return ( 
    <Routes>   
    <Route path={ROUTERS.PATH} element={<MainPage />} />
    <Route path={ROUTERS.STUDENTS.PATH} element={<Students />} />
    <Route path={ROUTERS.PATH} 
    element={
        <PermissionsRouter>
            <Forms/>
        </PermissionsRouter>
    } />



    </Routes> 
    );
};


