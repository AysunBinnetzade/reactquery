import React from 'react'
import { userDatas } from '../mockDatas'
import { Navigate } from 'react-router-dom'

export const PermissionsRouter = ({children}) => {
if (!userDatas.permissions.includes("STUDENT")) {
    return children;
}
    return <Navigate to ="/" replace/>
    
};