import { teamMemberStore } from "../../store/teamMemberStore";
import React from "react";
import { Header } from "../common/Header/Header.component";
import { NavLink } from "react-router-dom";
import {HelmetComponent} from "../common/Helmet/Helmet.component";


export const TeamMembers = ({ onClickEdit }) => {
    return (
        <>
            <HelmetComponent title="Team Members"/>
            <Header>
                <div>
                    <h1 className="header-title">ANKO Technologies Corp</h1>
                    <span className="header-subtitle">Joined January 2020</span>
                </div>
            </Header>
            <div className="team-members row justify-content-md-center">
                <div className="mb-5 col-md-9">
                    <div className="p-5 pb-4 text-center">
                        <strong>TEAM MEMBERS</strong>
                        <div className="mt-3 short-line mx-auto"> </div>
                    </div>
                    <ul className="list-group">
                        {teamMemberStore.map((item, index) => (
                            <li key={index} className="p-3 shadow-sm rounded list-group-item mb-2 d-flex border-1 align-items-center justify-content-between text-center">
                                <div className="d-flex align-items-center">
                                    <div className="round p-2 rounded-circle">
                                        {item
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                    <div className="m-3">{item}</div>
                                </div>
                                <NavLink onClick={() => onClickEdit(item)} className="text-decoration-none text-reset" to="/edit-member-information">
                                    Edit
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
