import { api } from "../api/api.service";



export const createWeeklyReport = (data, companyId, teamMemberId) => {
    return api.post(`https://localhost:5001/api/companies/${companyId}/team-members/${teamMemberId}/reports`, data)
        .then((response) => response.data);
};

export default createWeeklyReport;