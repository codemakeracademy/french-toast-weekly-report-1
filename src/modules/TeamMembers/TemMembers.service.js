import { api } from "../api/api.service";

export const getTeamMembers = (companyId) => {
    return api.get(`companies/${companyId}/team-members`, {validateStatus: false})
        .then((response) => response.data);
};