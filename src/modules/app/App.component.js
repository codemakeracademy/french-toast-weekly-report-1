import React from "react";
import {Article} from "../common/Article/Article.component";
import {Aside} from "../common/Aside/Aside.component";
import {useAuth0} from '@auth0/auth0-react';
import WelcomePage from "../WelcomePage/WelcomePage";


export function App() {
    const {isAuthenticated, user} = useAuth0();
    console.log(user)
    return (
        <>
            {isAuthenticated
                ? <div className="wrapper d-flex w-100 h-100">
                    <Aside/>
                    <Article/>
                </div>
                :<WelcomePage/>
            }
        </>
    );
}
