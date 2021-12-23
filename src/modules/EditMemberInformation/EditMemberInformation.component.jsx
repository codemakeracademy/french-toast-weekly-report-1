import React, {useContext, useEffect, useState} from "react";
import {Header} from "../common/Header/Header.component";
import {teamMemberStore} from "../../store/teamMemberStore";
import {EditModal} from "./EditModal.component";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {Form, Formik} from "formik";
import {TextInput} from "../common/Formik/textInput.component";
import * as Yup from "yup";
import {changeMemberInfo} from "./EditMemberInformation.service";
import {Context} from "../app/App.component";
import {getMemberInitials, getMembersFullName, getMembersName} from "../common/function";


export const EditMemberInformation = ({user}) => {
    const {currentUser, setUpdateMember, selectedMember} = useContext(Context);

    const [edit, useEdit] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [member, setMember] = useState(selectedMember || currentUser)

    useEffect(() => {
        async function fetchData() {
            try {
                await user && setMember(currentUser) && useEdit(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    });

    useEffect(() => {
        async function fetchData() {
            try {
                selectedMember
                    ? await setMember(selectedMember)

                    : await setMember(currentUser)
                if (selectedMember && currentUser.teamMemberId !== selectedMember.teamMemberId) {
                    useEdit(true)
                }
                setShowForm(true)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [currentUser, selectedMember]);



    const memberInitials = getMemberInitials(member)
    const membersFullName = getMembersFullName(member)
    const membersName = getMembersName(member)
    const [showEdit, setShowEdit] = useState(false)
    const [currentTitle, setCurrentTitle] = useState("")

    const onClickEdit = (e) => {
        setShowEdit(true)
        setCurrentTitle(e.target.text)
    }

    const onSubmit = (values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
            changeMemberInfo(currentUser.teamMemberId, values)
            setUpdateMember([values.firstName, values.lastName, values.title])
            setSubmitting(false);
            resetForm()
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
                <span className="header-subtitle">{member.mail}</span>
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

                        {showForm && <Formik
                            initialValues={{
                                firstName: member.firstName,
                                lastName: member.lastName,
                                title: member.title
                            }}

                            validationSchema={Yup.object({
                                firstName: Yup.string()
                                    .max(20, 'Must be 20 characters or less'),
                                lastName: Yup.string()
                                    .max(20, 'Must be 20 characters or less'),
                                title: Yup.string()
                                    .max(100, 'Must be 100 characters or less'),
                            })}

                            onSubmit={onSubmit}
                        >
                            {({isSubmitting}) => (
                                <Form className="col-md-4">

                                    <TextInput
                                        disabled={edit}
                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        placeholder=""
                                    />
                                    <TextInput
                                        disabled={edit}
                                        label="Last Name"
                                        name="lastName"
                                        type="text"
                                        placeholder=""
                                    />
                                    <TextInput
                                        disabled={edit}
                                        label="Title"
                                        name="title"
                                        type="text"
                                        placeholder=""
                                    />

                                    <div className="form-group">
                                        <button disabled={edit || isSubmitting} type="submit"
                                                className="btn btn-warning border-2 shadow-none">Save
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>}
                    </div>
                    <div className="page-section reports-control">
                        <div
                            className="title border-bottom">{membersName.toUpperCase() + " REPORTS TO THE FOLLOWING LEADERS:"}</div>
                        <div className="team">
                            {teamMemberStore.map((item, index) => (
                                <a key={index} href="#" className="me-2 btn btn-dark shadow-none">{item}</a>
                            ))}
                        </div>
                        <a onClick={(e) => onClickEdit(e)} className="btn btn-outline-dark border-2 shadow-none"
                           data-bs-toggle="modal" role="button">Edit Leader(s)</a>
                    </div>
                    <div className="page-section reports-control">
                        <div
                            className="title border-bottom">{"THE FOLLOWING TEAM MEMBERS REPORT TO " + membersName.toUpperCase() + ":"}</div>
                        <div className="team">
                            {teamMemberStore.map((item, index) => (
                                <a key={index} href="#" className="me-2 btn btn-dark shadow-none">{item}</a>
                            ))}
                        </div>
                        <a onClick={(e) => onClickEdit(e)} className="btn btn-outline-dark border-2 shadow-none"
                           data-bs-toggle="modal"
                           role="button">Edit Member(s)</a>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">{membersName.toUpperCase() + "'S INVITE LINK"}</div>
                        <p>{"Share the following link to invite team members on " + membersName + "'s behalf."}</p>
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