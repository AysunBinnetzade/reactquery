import axios from "axios";

const baseUrl="https://67901e2449875e5a1a94681a.mockapi.io/teacher";

export const teacherService= {
    getAllTeacherList: async() => {
        return await axios.get (baseUrl);
    },

//     addTeacher: async (teacherdatas) => {
// return await axios.post (baseUrl, teacherdatas);
//     }

};


