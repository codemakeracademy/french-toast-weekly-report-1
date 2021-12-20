import { api } from "../api/api.service";

export const getUserBySub = (sub) => {
    return api.get(`team-members/${sub}`, {validateStatus: false})
        .then((response) => response.data);
};

export const getCompanyById = (id) => {
    return api.get(`companies${id}`, {validateStatus: false})
        .then((response) => response.data);
};