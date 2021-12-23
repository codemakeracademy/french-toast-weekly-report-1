import { api } from "../api/api.service";

export const changeNameCompany = async (companyId, name) => {
    await api.put(`companies/`, {
        "companyId": companyId,
        "companyName": name})
};
