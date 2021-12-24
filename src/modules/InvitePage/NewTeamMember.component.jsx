import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {Header} from "../common/Header/Header.component";
import React, {useContext} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {linkToObject} from "../common/util/function";
import {Loader} from "../common/Loader/Loader.component";
import {useAuth0} from "@auth0/auth0-react";
import {createNewTeamMember} from "./NewTeamMember.service";
import {Context} from "../app/App.component";

export const NewTeamMember = () => {
    const {setCreateNewMember} = useContext(Context);

    const {user} = useAuth0();
    const newMember = sessionStorage.getItem("href")
    const obj = linkToObject(newMember)


    const onSubmit = async (values, {setSubmitting}) => {
        await createNewTeamMember(values, obj.teamMemberTo)
        await setCreateNewMember(true)
        setSubmitting(false);
    }

    if(!obj || !user) {
        return <Loader/>
    }


    return(
        <div>
            <HelmetComponent title="Weekly Team Report"/>
            <Header>
                <div>
                    <h1 className="header-title">Weekly Team Report</h1>
                </div>
            </Header>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <div className="row mt-5">
                        <Formik
                            initialValues={{
                                FirstName: obj.FirstName,
                                LastName: obj.LastName,
                                Title: '',
                                Mail: user.email,
                                Subject: user.sub,
                                CompanyId: obj.companyId
                            }}
                            onSubmit={onSubmit}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="FirstName" className="form-label">
                                                    First Name
                                                </label>
                                                <Field className="form-control border-2 shadow-none" type="text"
                                                       name="FirstName"/>
                                                <ErrorMessage name="FirstName" component="div"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="LastName" className="form-label">
                                                    Last Name
                                                </label>
                                                <Field className="form-control border-2 shadow-none" type="text"
                                                       name="LastName"/>
                                                <ErrorMessage name="LastName" component="div"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Title" className="form-label">
                                                    Title
                                                </label>
                                                <Field className="form-control border-2 shadow-none" type="text"
                                                       name="Title"/>
                                                <ErrorMessage name="Title" component="div"/>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    className="btn btn-warning shadow-none"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                >Continue
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


        </div>
    )
}