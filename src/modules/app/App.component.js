import React, { useState, useEffect } from "react";
import { Article } from "../common/Article/Article.component";
import { Aside } from "../common/Aside/Aside.component";
import { useAuth0 } from '@auth0/auth0-react';
import WelcomePage from "../WelcomePage/WelcomePage";
import NewCompany from "../MyCompany/NewCompany.component";
import * as appService from "./App.service";

export function App() {
    const { isAuthenticated, user } = useAuth0();
    const [hasCompany, setHasCompany] = useState(false);
    console.log(user)

    useEffect(() => {
        try {
            appService.getUserBySub(user.sub)
                .then(res => {
                    res ? console.log("true") : console.log(false);
                    res ? setHasCompany(true) : setHasCompany(false);
                });
            // eslint-disable-next-line no-empty
        } catch { }
    }, [user])

    {
        if (isAuthenticated && hasCompany) {
            return (
                <>
                    <div className="wrapper d-flex w-100 h-100">
                        <Aside />
                        <Article user={user} />
                    </div>
                </>
            )
        } else if (isAuthenticated && !hasCompany) {
            return (
                <>
                    <NewCompany />
                </>
            )
        } else if (!isAuthenticated && !hasCompany) {
            return (
                <>
                    <WelcomePage />
                </>
            )
        }
    }
}


export default App;