import { api } from "../api/api.service";

export const changeMemberInfo = async (value) => {
    await api.put(`companies/${value.CompanyId}/team-members`, value);
};
