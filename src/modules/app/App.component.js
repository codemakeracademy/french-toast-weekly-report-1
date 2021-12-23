import React, {useEffect, useState} from "react";
import {Article} from "../common/Article/Article.component";
import {useAuth0} from '@auth0/auth0-react';
import WelcomePage from "../WelcomePage/WelcomePage";
import {InvitePage} from "../InvitePage/InvitePage.component";
import {NewCompany} from "../MyCompany/NewCompany.component";
import * as appService from "./App.service";

export function App() {
    const {isAuthenticated, user} = useAuth0();
    const currentLocation = window.location;
    const [hasCompany, setHasCompany] = useState(false)
    const [createNew, setCreateNew] = useState()
    const [updateLocalstorage, setUpdateLocalstorage] = useState()
    const [dataFromBD, setDataFromBD] = useState(JSON.parse(localStorage.getItem("user")))



    useEffect(() => {
        try {
            debugger
            appService.getUserBySub(user.sub)
                .then(res => {
                    // res ? console.log("true") : console.log(false);
                    res ? setHasCompany(true) : setHasCompany(false);
                });

        } catch(error) {
            console.error(error)
        }

    }, [user, createNew])

    useEffect(() => {
        async function fetchData() {
            try {
                await appService.setUserToLocalstorage(user.sub)
                await setDataFromBD(JSON.parse(localStorage.getItem("user")))
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [user,updateLocalstorage]);



    return (
        <>
            {currentLocation.pathname === "/invite"
                ? (isAuthenticated
                    ? <Article />
                    : <InvitePage/>)
                : (isAuthenticated && hasCompany)
                    ? <Article dataFromBD={dataFromBD} setUpdateLocalstorage={setUpdateLocalstorage}/>
                    : (isAuthenticated && !hasCompany)
                        ? <NewCompany onButton={setCreateNew}/>
                        : <WelcomePage/>
            }
        </>
    );
}


export default App;