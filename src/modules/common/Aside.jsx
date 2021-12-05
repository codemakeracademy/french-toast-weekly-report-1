import React from "react";
import logoPng from "../../img/logo.png"
import exitPng from "../../img/exit.png"
import settingPng from "../../img/Setting.png"
import {NavLink} from "react-router-dom";



export const Aside = () => {
    return (
        <aside className="p-5 fixed-bottom h-100 d-flex flex-column justify-content-between">
            <div>
                <img alt="logo" src={logoPng}/>
                <ul className="pt-5 nav nav-pills flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" exact to="/">Launch Guide</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" to="/invite-your-team">Invite Your Team</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" to="/team-reports">Team Reports</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" to="/my-reports">My Reports</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" to="/fill-out-a-report">Fill out a Report</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" to="/back-to-elite">Back to Elite</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName= "active" to="/my-company">My Company</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src={settingPng} alt="icon"/>My Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={exitPng} alt="icon"/>Sign Out</a>
                    </li>
                </ul>
            </div>
        </aside>
)
}

