import React from "react";
import logoPng from "../../../img/logo.png";
import { NavLink } from "react-router-dom";
import { navGroup1, navGroup2 } from "../../../store/navStore";
import AuthNav from "../../../auth/auth-nav";

export const Aside = () => {
    return (
        <aside className="p-5 fixed-bottom h-100 d-flex flex-column justify-content-between">
            <div>
                <img alt="logo" src={logoPng} />
                <ul className="pt-5 nav nav-pills flex-column">
                    {navGroup1.map((item, index) => {
                        const className = "nav-link" + (item.Icon ? " d-flex align-items-center" : "") + (item.IsMarked ? " marked" : "");
                        return (
                            <li key={index} className="nav-item">
                                <NavLink className={className} activeClassName="active" exact={item.isExact} to={item.Link}>
                                    {item.Icon} {item.Text}
                                </NavLink>
                            </li>
                        );
                    })}
                    <AuthNav/>
                </ul>
            </div>
            <div>
                <ul className="nav nav-pills flex-column">
                    {navGroup2.map((item, index) => {
                        const className = "nav-link" + (item.Icon ? " d-flex align-items-center" : "") + (item.IsMarked ? " marked" : "");
                        return (
                            <li key={index} className="nav-item">
                                <NavLink className={className} activeClassName="active" exact={item.isExact} to={item.Link}>
                                    {item.Icon} {item.Text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};
