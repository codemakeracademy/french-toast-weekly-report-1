import { api } from "../api/api.service";

export const changeNameCompany = async (companyId, name, joinDate) => {
    await api.put(`companies/`, {
        "companyId": companyId,
        "companyName": name,
        "joinDate": joinDate
    })
};
