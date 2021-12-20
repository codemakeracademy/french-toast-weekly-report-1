import React, {useEffect, useState} from "react";
import {Article} from "../common/Article/Article.component";
import {useAuth0} from '@auth0/auth0-react';
import WelcomePage from "../WelcomePage/WelcomePage";
import {InvitePage} from "../InvitePage/InvitePage.component";
import {NewCompany} from "../MyCompany/NewCompany.component";
import {getUserBySub} from "./App.service";


export function App() {
    const {isAuthenticated, user} = useAuth0();
    const currentLocation = window.location;
    const [hasCompany, setHasCompany] = useState(false)
    const [createNew, setCreateNew] = useState()
    //const [userFromBD, setUserFromBD] = useState()


    useEffect( () => {
        try {
            getUserBySub(user.sub).then(res => {setHasCompany(!!res)})
        } catch {
            console.error("error")
        }

    }, [user, createNew])
    return (
        <>
            {currentLocation.pathname === "/invite"
                ? (isAuthenticated
                    ? <Article/>
                    : <InvitePage/>)
                : (isAuthenticated && hasCompany)
                    ? <Article/>
                    : (isAuthenticated && !hasCompany)
                        ? <NewCompany onButton={setCreateNew}/>
                        : <WelcomePage/>
            }
        </>
    );
}
