import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {Header} from "../common/Header/Header.component";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {changeNameCompany} from "./MyCompany.service";
import {Context} from "../app/App.component";
import {getJoinDate} from "../common/util/function";

export const MyCompany = () => {

    const {currentUser, setUpdateCompany} = useContext(Context);

    const onSubmit = (values, {setSubmitting, resetForm}) => {
            changeNameCompany(currentUser.companyId, values.companyName, currentUser.joinDate);
            setUpdateCompany(values.companyName);
            setSubmitting(false);
            resetForm();
    }
    const dateTitle = getJoinDate(currentUser.joinDate)

    return (
        <>
            <HelmetComponent title="My Company"/>
            <Header>
                <div>
                    <h1 className="header-title">{currentUser.companyName}</h1>
                    <span className="header-subtitle">{dateTitle}</span>
                </div>
            </Header>
            <div className="container justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                    <div className="page-title">
                        <h2>Edit {currentUser.companyName}'s Information</h2>
                        <p>You may edit the company name, as well as deactivate/activate the Weekly Report Tool
                            functionality. If you need to edit a team member's information, you can access that
                            information by seeing the list of team members.</p>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">RENAME {currentUser.companyName.toUpperCase()}</div>
                        <Formik
                            initialValues={{companyName: ''}}
                            onSubmit={onSubmit}
                        >
                            {({isSubmitting}) => (
                                <Form className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="companyName" className="form-label">
                                            Change company name
                                        </label>
                                        <Field className="form-control border-2 shadow-none" type="text"
                                               name="companyName"/>
                                    </div>
                                    <ErrorMessage name="companyName" component="div"/>
                                    <div className="form-group">
                                        <button disabled={isSubmitting} type="submit"
                                                className="btn btn-outline-dark border-2 shadow-none">
                                            Save name change
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">SEE A LIST OF {currentUser.companyName.toUpperCase()}'S TEAM
                            MEMBERS
                        </div>
                        <p className="page-text">
                            If you need to edit a particular team member, you can see a complete list of team members
                            and visit their profile to make edits. <strong>You will not be able to see a team member's
                            weekly report.</strong>
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