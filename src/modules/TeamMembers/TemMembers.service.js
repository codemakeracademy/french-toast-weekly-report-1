import { api } from "../api/api.service";

export const getTeamMembers = (companyId) => {
    return api.get(`companies/${companyId}/team-members`)
        .then((response) => response.data);
};