import React from "react";
import {IoMdClose} from "react-icons/io";

export const EditModal = ({setShowEdit, teamMemberStore, title}) => {
    return (
        <div className="modal1">
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick={() => setShowEdit(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                </div>
                <div className="modal-body">
                    <div className="page-title">
                        <h2>{title}</h2>
                        <p>By default, the person who sent you the invite will receive your weekly report. You may also
                            select the person you report to directly as an additional leader.</p>
                        <p>Pro Tip: You can change who sees your report in your profile settings.</p>
                    </div>
                    <div className="tags">
                        {teamMemberStore.map((item, index) => (
                            <div key={index} className="d-flex tag input-group mb-3">
                                <div className="btn btn-dark shadow-none">
                                    {item}   <IoMdClose className="name-btn"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form>
                        <div className="form-group">
                            <input name="members" type="text" className="form-control border-1 shadow-none"/>
                        </div>
                        <button className="btn btn-warning" data-bs-dismiss="modal">Save Changes</button>
                    </form>
                </div>
            </div>

        </div>


    )
}