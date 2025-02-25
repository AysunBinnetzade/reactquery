import axios from "axios";

const baseUrl="https://67901e2449875e5a1a94681a.mockapi.io/student";

export const studentService= {
    getAllStudentList: () => {
        return axios.get (baseUrl);
    }
};