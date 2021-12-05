import React, {useState} from "react";
import {Route} from 'react-router-dom'
import {LaunchGuide} from "../LaunchGuide/LaunchGuide";
import {InviteYourTeam} from "../InviteYourTeam/InviteYourTeam";
import {MyCompany} from "../MyCompany/MyCompany";
import {TeamMembers} from "../TeamMembers/TeamMembers";
import {EditMemberInformation} from "../EditMemberInformation/EditMemberInformation";

export const Article = () => {

    const [editableMember, setEditableMember] = useState("")
    const onClickEdit = (member) => {
        setEditableMember(member)
    }

    return (
        <article className="w-100 h-100">
            <Route exact path="/">
                <LaunchGuide/>
            </Route>
            <Route path="/invite-your-team">
                <InviteYourTeam/>
            </Route>
            <Route path="/my-company">
                <MyCompany/>
            </Route>
            <Route path="/team-members">
                <TeamMembers onClickEdit={onClickEdit}/>
            </Route>
            <Route path="/edit-member-information">
                <EditMemberInformation editableMember={editableMember}/>
            </Route>
        </article>
    )
}
