import { api } from "../api/api.service";

export const changeMemberInfo = async (id, value) => {
    await api.put(`companies/${id}/team-members`, value
        )
}

