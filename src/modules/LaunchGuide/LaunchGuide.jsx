import React from "react";
import {Card} from "./Card";
import {launchStore} from "../../store/launchStore";
import {Header} from "../common/Header";
import logoPng from "../../img/logo.png";




export const LaunchGuide = () => {
    return (
        <>
            <Header>
                <img className="mx-auto" alt="logo" src={logoPng}/>
                <h1>Launch Guide</h1>
            </Header>
            <div className="p-2 w-75 h-auto mx-auto">
                <div className="card mb-3 p-4 bg-transparent border-0 text-right">
                    {launchStore.map((card, index)=><Card key={index} store={card} number={index}/>)}
                </div>
            </div>
        </>
    )
}
