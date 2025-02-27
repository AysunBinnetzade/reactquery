import axios from "axios";

const baseUrl="https://67901e2449875e5a1a94681a.mockapi.io/teacher";

export const teacherService= {
    getAllTeacherList: () => {
        return axios.get (baseUrl);
    }
};