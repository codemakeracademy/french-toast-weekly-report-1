import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../app/App.component";

export const TeamMemberCard = ({item}) => {

    const {setSelectedMember} = useContext(Context);

    const fullName = item.firstName + " " + item.lastName
    const initials = (item.firstName.charAt(0) + item.lastName.charAt(0)).toUpperCase()
    return (
        <li className="p-3 shadow-sm rounded list-group-item mb-2 d-flex border-1 align-items-center justify-content-between text-center">
            <div className="d-flex align-items-center">
                <div className="round p-2 rounded-circle">
                    {initials}
                </div>
                <div className="m-3">{fullName}</div>
            </div>
            <NavLink onClick={() => {
                setSelectedMember(item)
            } } className="text-decoration-none text-reset" to="/edit-member-information">
                Edit
            </NavLink>
        </li>
    );
}

