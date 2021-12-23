import {useContext} from "react";
import {Context} from "../app/App.component";
import {EditMemberInformation} from "./EditMemberInformation.component";

export const Profile = ({anotherMember}) => {
    const {currentUser, selectedMember} = useContext(Context);

    return (
        anotherMember
             ? <EditMemberInformation key={selectedMember.teamMemberId} edit={currentUser.teamMemberId !== selectedMember.teamMemberId} member={selectedMember}/>
             : <EditMemberInformation key={currentUser.teamMemberId} edit={false} member={currentUser}/>
    )
}