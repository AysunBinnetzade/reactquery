import { Form } from "react-router-dom";

export const ROUTERS = {
    PATH : "/",
    FORM: "/form",
    STUDENTS: {
        PATH:"/students",
        DETAIL: "/students/:id",
    },
    TEACHER: {
        PATH:"/teachers",
        DETAIL:"/teachers/:id",
    },
    
}