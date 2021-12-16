import React from "react";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import {Header} from "../common/Header/Header.component";
import {useAuth0} from "@auth0/auth0-react";

export const MyProfile = () => {
    const {user, isLoading} = useAuth0();


    if (isLoading) {

        return <div>Loading ...</div>;
    }
    return (
        <>
            <HelmetComponent title="My Profile"/>
            <Header>
                <h1>My Profile</h1>
            </Header>
            <div className="container justify-content-md-center p-5">
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        </>
    )
}