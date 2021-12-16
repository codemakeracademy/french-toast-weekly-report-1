import React from "react";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {Header} from "../common/Header/Header.component";
import {Formik} from "formik";

export const NewCompany = ({addNewCompany}) => {
    const toRegister = (companyNameObj) => {
        addNewCompany(companyNameObj)
    }
    return (
        <>
            <HelmetComponent title="New Company"/>
            <Header>
                <div>
                    <h1 className="header-title">New Company</h1>
                </div>
            </Header>
            <div className="container justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                    <div className="page-title">
                        <h2>Registration form</h2>
                        <p>Register your company to be able to track your team's reports</p>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">Registration new company</div>

                        <Formik
                            initialValues={{companyName: ''}}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    toRegister(values)
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
                                            Enter your Company Name
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
                                            Register
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}