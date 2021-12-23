import React, {useEffect, useState} from "react";
import {Article} from "../common/Article/Article.component";
import {useAuth0} from '@auth0/auth0-react';
import WelcomePage from "../WelcomePage/WelcomePage";
import {InvitePage} from "../InvitePage/InvitePage.component";
import {NewCompany} from "../MyCompany/NewCompany.component";
import * as appService from "./App.service";

export const Context = React.createContext(null)

export function App() {
    const [currentUser, setCurrentUser] = useState()
    const {isAuthenticated, user} = useAuth0();
    const currentLocation = window.location;
    const [hasCompany, setHasCompany] = useState(false)
    const [createNew, setCreateNew] = useState()
    const [updateCompany, setUpdateCompany] = useState()
    const [updateMember, setUpdateMember] = useState()

    const [selectedMember, setSelectedMember] = useState()


    useEffect(() => {
        try {
            (user && user.sub && appService.getUserBySub(user.sub)
                .then(res => {
                    res ? setHasCompany(true) : setHasCompany(false);
                }))

        } catch(error) {
            console.error(error)
        }

    }, [user, createNew])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (user && user.sub && appService.getUser(user.sub))
                setCurrentUser(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [user, updateCompany, updateMember]);


    return (
        <Context.Provider value={{currentUser, setUpdateMember, setUpdateCompany, selectedMember, setSelectedMember}}>
            {currentLocation.pathname === "/invite"
                ? (isAuthenticated
                    ? <Article />
                    : <InvitePage/>)
                : (isAuthenticated && hasCompany)
                    ? <Article/>
                    : (isAuthenticated && !hasCompany)
                        ? <NewCompany onButton={setCreateNew}/>
                        : <WelcomePage/>
            }
        </Context.Provider>
    );
}


export default App;