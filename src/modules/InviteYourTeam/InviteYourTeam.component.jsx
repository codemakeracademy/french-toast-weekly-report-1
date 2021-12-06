import React, {useState} from "react";
import {Success} from "./Succsess.component";
import {Header} from "../common/Header/Header.component";


export const InviteYourTeam = () => {
    const [success, setSuccess] = useState(false)
    const onClickInvite = () => {
        setSuccess(true)
    }
    return (
        <>
            <Header>
                <h1>Invite Your Team</h1>
            </Header>
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    {success && <Success/>}
                    <form>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">
                                    Enter the team member you'd like to invite
                                </h6>
                                <p>Don't worry! You'll be able to add more team members later.</p>
                                <div className="form-group">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input name="firstName" type="text" className="form-control shadow-none"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input name="lastName" type="text" className="form-control shadow-none"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input name="email" type="email" className="form-control shadow-none"/>
                                </div>
                                <div className="form-group">
                                    <button onClick={onClickInvite} type="button"
                                        /*type="submit"*/
                                            className="btn btn-warning shadow-none">Invite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
