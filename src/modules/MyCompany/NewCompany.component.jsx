import React, { useState } from "react";
import { HelmetComponent } from "../common/Helmet/Helmet.component";
import { Header } from "../common/Header/Header.component";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAuth0 } from "@auth0/auth0-react";
// eslint-disable-next-line no-unused-vars
import * as companyService from "./Company.service";
import { App } from "../app/App.component";

// eslint-disable-next-line no-unused-vars
export const NewCompany = ({ addNewCompany }) => {

    // const onSubmit = (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //         addNewCompany(values);
    //         setSubmitting(false);
    //     }, 400);
    // };

    const [isCompanyAdded, setIsCompanyAdded] = useState(false);
    const onSubmit = (values) => {
            companyService.addNewCompany(values.companyName)
                          .then(setIsCompanyAdded(true));
        };

    const { logout } = useAuth0();

    
    return (
        isCompanyAdded
        ?
        <App/>
        :
        <>
            <HelmetComponent title="New Company" />
            <Header>
                <div>
                    <h1 className="header-title">New Company</h1>
                </div>
            </Header>
            <div className="container justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                    <div className="page-title border-bottom">
                        <h2>Registration form</h2>
                        <p>Register your company to be able to track your team's reports</p>
                    </div>
                    <div className="page-section">
                        <Formik initialValues={{ companyName: "" }} onSubmit={onSubmit}>
                            {({ isSubmitting }) => (
                                <Form className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="companyName" className="form-label">
                                            Enter your Company Name
                                        </label>
                                        <Field className="form-control border-2 shadow-none" type="text" name="companyName" />
                                    </div>
                                    <ErrorMessage name="companyName" component="div" />
                                    <div className="form-group">
                                        <button disabled={isSubmitting} type="submit" className="btn btn-outline-dark border-2 shadow-none">
                                            Register Your Company
                                        </button>
                                        <button onClick={() => logout({ returnTo: window.location.origin })} className="ms-3 btn btn-outline-dark border-2 shadow-none">
                                            Sign Out
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewCompany;
