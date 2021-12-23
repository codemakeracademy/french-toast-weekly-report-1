import { api } from "../api/api.service";

export const changeNameCompany = async (companyId, name, date) => {
    await api.put(`companies/`, {
        "companyId": companyId,
        "companyName": name,
        "joinDate": date})



};


