import React, {useState} from "react";
import {Header} from "../common/Header/Header.component";
import {teamMemberStore} from "../../store/teamMemberStore";
import {EditModal} from "./EditModal.component";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useAuth0} from "@auth0/auth0-react";


export const EditMemberInformation = ({editableMember}) => {
    const {user} = useAuth0();

    const memberInitials = editableMember ? editableMember.split(" ").map((n)=>n[0]).join("") : user.nickname.split(" ").map((n)=>n[0]).join("")
    const membersFullName = editableMember ? editableMember : user.nickname
    const membersName = editableMember ? editableMember.split(" ")[0] : user.nickname
    const [showEdit, setShowEdit] = useState(false)
    const [currentTitle, setCurrentTitle] = useState("")
    const onClickEdit = (e) => {
        setShowEdit(true)
        setCurrentTitle(e.target.text)
    }
    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(values)
            setSubmitting(false);
        }, 400);
    }

    return (
        <>
            <HelmetComponent title="Edit Member Information"/>
            <Header>
                <div className="mx-auto header-avatar">
                    <div>{memberInitials}</div>
                </div>
                <h1 className="header-title">{membersFullName}</h1>
                <span className="header-subtitle">anatoliy@ankosoftware.com</span>
            </Header>
            <div className="container justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                    <div className="page-title">
                        <h1>{"Edit " + membersName + "'s Information"}</h1>
                        <p>You may assign leaders or team members to this person, as well as deactivate their
                            account if they no longer work for your organization.</p>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">BASIC PROFILE INFORMATION</div>

                        <Formik
                            initialValues={{ firstName: '', lastName: '', title: '' }}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="col-md-4">

                                    <div className="form-group">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <Field type="text" name="firstName" className="form-control border-2 shadow-none"/>
                                        <ErrorMessage name="firstName" component="div" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <Field type="text" name="lastName" className="form-control border-2 shadow-none"/>
                                        <ErrorMessage name="lastName" component="div" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <Field type="text" name="title" className="form-control border-2 shadow-none"/>
                                        <ErrorMessage name="title" component="div" />

                                    </div>
                                    <div className="form-group">
                                        <button disabled={isSubmitting} type="submit" className="btn btn-warning border-2 shadow-none">Save</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">{membersName.toUpperCase() + " REPORTS TO THE FOLLOWING LEADERS:"}</div>
                        <div className="team">
                            {teamMemberStore.map((item, index) => (
                                <a key={index} href="#" className="me-2 btn btn-dark shadow-none">{item}</a>
                            ))}
                        </div>
                        <a onClick={(e)=>onClickEdit(e)} className="btn btn-outline-dark border-2 shadow-none" data-bs-toggle="modal" role="button">Edit Leader(s)</a>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">{"THE FOLLOWING TEAM MEMBERS REPORT TO "+ membersName.toUpperCase() +":"}</div>
                        <div className="team">
                            {teamMemberStore.map((item, index) => (
                                <a key={index} href="#" className="me-2 btn btn-dark shadow-none">{item}</a>
                            ))}
                        </div>
                        <a onClick={(e)=>onClickEdit(e)} className="btn btn-outline-dark border-2 shadow-none" data-bs-toggle="modal"
                           role="button">Edit Member(s)</a>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">{membersName.toUpperCase()+"'S INVITE LINK"}</div>
                        <p>{"Share the following link to invite team members on "+ membersName +"'s behalf."}</p>
                        <form className="text-center">
                                <textarea disabled className="text-area col-md-6"
                                          defaultValue="https://www.figma.com/file/xs4FaSfzPijgSJ5R3aqrJBxs4FaSfzPijgSJ5R3aqrJBxs4FaSfzPijgSJ5R3aqrJBxs4FaSfzPijgSJ5R3aqrJB/Weekly-Report?node-id=5%3A20"
                                          />
                            <div className="p-2">
                                <button type="button" className="btn btn-warning shadow-none">Copy
                                    Link
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {showEdit && <EditModal title={currentTitle} teamMemberStore={teamMemberStore} setShowEdit={setShowEdit}/>}
        </>
    )
}