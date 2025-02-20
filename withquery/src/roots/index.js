import React from 'react'
import { ROUTERS } from './const'
import { MainPage } from '../../form';

export const ROUTER = () =>{
    return ( 
    <Rouets>   
    <Route path={ROUTERS.PATH} element={<MainPage />} />
    </Rouets> 
    );
};


