import { api } from "../api/api.service";



export const addNewCompany = (companyName) => {
    const date = new Date();
    const data = {
        CompanyName: companyName,
        JoinDate: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    }
    api.post(`https://localhost:5001/api/companies`, data)
        .then((response) => response.data);
    // api.post(`https://localhost:5001/api/companies/${companyId}/team-members`, data)
    //     .then((response) => response.data);
};