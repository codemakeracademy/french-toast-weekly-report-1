import { api } from "../api/api.service";



export const getUserBySub = (sub) => {
    return api.get(`https://localhost:5001/api/team-members/${sub}`, {validateStatus: false})
              .then((response) => response.data);
};