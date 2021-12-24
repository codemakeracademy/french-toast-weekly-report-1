import {api} from "../api/api.service";


export const createNewTeamMember = async (values, teamMemberTo) => {
    const responseTeamMember = await api.post(`companies/${values.companyId}/team-members`, values)

    const body = {
        "teamMemberFrom": responseTeamMember.data.teamMemberId,
        "teamMemberTo": teamMemberTo
    }

    await api.post(`report-from-to`, body)
}
