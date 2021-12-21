import { api } from "../api/api.service";

export const getUserBySub = (sub) => {
    return api.get(`team-members/${sub}`, {validateStatus: false})
        .then((response) => response.data);
};

export const setUserToLocalstorage = async (sub) => {
    let teamMember = await api.get(`team-members/${sub}`, {validateStatus: false})
    let company = await api.get(`companies/${teamMember.data.companyId}`, {validateStatus: false})
    localStorage.setItem("user", JSON.stringify({...teamMember.data, ...company.data }))
};



