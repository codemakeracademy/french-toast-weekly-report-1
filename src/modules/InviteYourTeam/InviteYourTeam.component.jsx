import React, {useState} from "react";
import {Success} from "./Succsess.component";
import {Header} from "../common/Header/Header.component";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {ErrorMessage, Field, Form, Formik} from "formik";

export const InviteYourTeam = () => {
    const [success, setSuccess] = useState(false);

    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            setSuccess(true);
            console.log(values)
            setSubmitting(false);
        }, 400);
    }
    return (
        <>
            <HelmetComponent title="Invite Your Team"/>
            <Header>
                <h1>Invite Your Team</h1>
            </Header>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    {success && <Success/>}
                    <div className="row mt-5">
                        <Formik
                            initialValues={{firstName: '', lastName: '', email: ''}}
                            onSubmit={onSubmit}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">Enter the team member you'd like to invite</h6>
                                            <p>Don't worry! You'll be able to add more team members later.</p>
                                            <div className="form-group">
                                                <label htmlFor="firstName" className="form-label">
                                                    First Name
                                                </label>
                                                <Field className="form-control border-2 shadow-none" type="text"
                                                       name="firstName"/>
                                                <ErrorMessage name="firstName" component="div"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastName" className="form-label">
                                                    Last Name
                                                </label>
                                                <Field className="form-control border-2 shadow-none" type="text"
                                                       name="lastName"/>
                                                <ErrorMessage name="firstName" component="div"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="firstName" className="form-label">
                                                    Email
                                                </label>
                                                <Field className="form-control border-2 shadow-none" type="email"
                                                       name="email"/>
                                                <ErrorMessage name="email" component="div"/>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    className="btn btn-warning shadow-none"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                >Invite
                                                </button>
                                            </div>
                                        </div>
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
