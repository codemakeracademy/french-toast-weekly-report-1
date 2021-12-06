import React from "react";
import {Header} from "../common/Header/Header.component";
import {NavLink} from "react-router-dom";

export const MyCompany = () => {
    return (
        <>
            <Header>
                <div>
                    <h1 className="header-title">ANKO Technologies Corp</h1>
                    <span className="header-subtitle">Joined January 2020</span>
                </div>
            </Header>
            <div className="justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                    <div className="page-title">
                        <h2>Edit ANKO Technologies Corp's Information</h2>
                        <p>You may edit the company name, as well as deactivate/activate the Weekly Report Tool
                            functionality.
                            If you need to edit a team member's information, you can access that information by
                            seeing the list of team members.</p>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">RENAME ANKO TECHNOLOGIES CORP</div>
                        <form className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="companyName" className="form-label">Change company name</label>
                                <input name="companyName" type="text" className="form-control border-2 shadow-none"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-outline-dark border-2 shadow-none">Save name
                                    change
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">SEE A LIST OF ANKO TECHNOLOGIES CORP'S TEAM MEMBERS</div>
                        <p className="page-text">If you need to edit a particular team member, you can see a complete
                            list of team members and visit theit profile to make edits. <strong>You will not be able
                                to see a team member's weekly report.</strong></p>
                        <NavLink to="/team-members" className="btn btn-outline-dark border-2 shadow-none">See All Team Members</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

