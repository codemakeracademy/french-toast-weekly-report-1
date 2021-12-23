import { api } from "../api/api.service";



export const createWeeklyReport = (data, companyId, teamMemberId) => {
    return api.post(`companies/${companyId}/team-members/${teamMemberId}/reports`, data)
        .then((response) => response.data);
};

export default createWeeklyReport;