import React, {useState} from "react";
import {Header} from "../common/Header";
import {teamMemberStore} from "../../store/teamMemberStore";
import {EditModal} from "./EditModal";


export const EditMemberInformation = ({editableMember}) => {
    const membersName = editableMember.split(" ")[0]
    const [showEdit, setShowEdit] = useState(false)
    const onClickEdit = () => {
        setShowEdit(true)
        console.log(showEdit)
    }

    return (
        <>
            <Header>
                <div className="mx-auto header-avatar">
                    <div>{editableMember.split(" ").map((n)=>n[0]).join("")}</div>
                </div>
                <h1 className="header-title">{editableMember}</h1>
                <span className="header-subtitle">anatoliy@ankosoftware.com</span>
            </Header>
            <div className=" justify-content-md-center p-5">
                <div className="col-md-12 p-0">
                    <div className="page-title">
                        <h1>{"Edit " + membersName + "'s Information"}</h1>
                        <p>You may assign leaders or team members to this person, as well as deactivate their
                            account if they no longer work for your organization.</p>
                    </div>
                    <div className="page-section">
                        <div className="title border-bottom">BASIC PROFILE INFORMATION</div>
                        <form className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input name="firstName" type="text" className="form-control border-2 shadow-none"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input name="lastName" type="text" className="form-control border-2 shadow-none"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input name="title" type="text" className="form-control border-2 shadow-none"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning border-2 shadow-none">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">{membersName.toUpperCase() + " REPORTS TO THE FOLLOWING LEADERS:"}</div>
                        <div className="team">
                            {teamMemberStore.map((item, index) => (
                                <a key={index} href="#" className="btn btn-dark shadow-none">{item}</a>
                            ))}
                        </div>
                        <a onClick={()=>onClickEdit()} className="btn btn-outline-dark border-2 shadow-none" data-bs-toggle="modal" role="button">Edit Leader(s)</a>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">{"THE FOLLOWING TEAM MEMBERS REPORT TO "+ membersName.toUpperCase() +":"}</div>
                        <div className="team">
                            {teamMemberStore.map((item, index) => (
                                <a key={index} href="#" className="btn btn-dark shadow-none">{item}</a>
                            ))}
                        </div>
                        <a className="btn btn-outline-dark border-2 shadow-none" data-bs-toggle="modal"
                           href="#exampleModalToggle" role="button">Edit Member(s)</a>
                    </div>
                    <div className="page-section reports-control">
                        <div className="title border-bottom">ANATOLIY'S INVITE LINK</div>
                        <p>Share the following link to invite team members on Anatoliy's behalf.</p>
                        <form className="text-center">
                                <textarea className="text-area col-md-6"
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
            {showEdit && <EditModal teamMemberStore={teamMemberStore} setShowEdit={setShowEdit}/>}
        </>
    )
}