import {NavLink} from "react-router-dom";
import React from "react";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {Header} from "../common/Header/Header.component";
import {Formik} from "formik";

export const EditMyCompany = ({company, changeNameCompany}) => {
    const date = new Date(company.JoinDate)
    const month = date.toLocaleString('en-us', {month: 'long'})
    const joinDate = month + " " + date.getFullYear()
    return (
        <>
            <HelmetComponent title="My Company"/>
            <Header>
                <div>
                    <h1 className="header-title">{company.companyName}</h1>
                    <span className="header-subtitle">Joined {joinDate}</span>
                </div>
            </Header>
            <div className="container justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                        <div className="page-title">
                            <h2>Edit {company.companyName}'s Information</h2>
                            <p>You may edit the company name, as well as deactivate/activate the Weekly Report Tool functionality. If you need to edit a team member's information, you can access that information by seeing the list of team members.</p>
                        </div>
                        <div className="page-section">
                            <div className="title border-bottom">RENAME {company.companyName.toUpperCase()}</div>

                            <Formik
                                initialValues={{companyName: ''}}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        changeNameCompany(values)
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                      values,
                                      handleChange,
                                      handleBlur,
                                      handleSubmit,
                                      isSubmitting,
                                  }) => (
                                    <form onSubmit={handleSubmit} className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="companyName" className="form-label">
                                                Change company name
                                            </label>
                                            <input
                                                className="form-control border-2 shadow-none"
                                                type="text"
                                                name="companyName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button disabled={isSubmitting} type="submit"
                                                    className="btn btn-outline-dark border-2 shadow-none">
                                                Save name change
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>

                        </div>
                        <div className="page-section">
                            <div className="title border-bottom">SEE A LIST OF {company.companyName.toUpperCase()}'S TEAM MEMBERS</div>
                            <p className="page-text">
                                If you need to edit a particular team member, you can see a complete list of team members and visit their profile to make edits. <strong>You will not be able to see a team member's weekly report.</strong>
                            </p>
                            <NavLink to="/team-members" className="btn btn-outline-dark border-2 shadow-none">
                                See All Team Members
                            </NavLink>
                        </div>
                </div>
            </div>
        </>

    )
}