import { api } from "../api/api.service";



export const getWeeklyReportHistory = (companyId, dateFrom, dateTo) => {
    return api.get(`companies/${companyId}/team-members/reports?dateFrom=${dateFrom}&dateTo=${dateTo}`)
        .then((response) => response.data);
};

export default getWeeklyReportHistory;