import React from "react";
import {Header} from "../common/Header/Header.component";
import {MyReportsCard} from "./MyReports.Card.component";
import {HelmetComponent} from "../common/Helmet/Helmet.component";

export const MyReports = () => {
    function expandAll(){
        const items = document.getElementsByClassName('accordion-collapse');
        const items2 = document.getElementsByClassName('accordion-button');
        for(let i = 0; i<items.length;i++)
        {
            console.log(items[i]);
            items[i].setAttribute('class', 'accordion-collapse collapse show');
            items2[i].setAttribute('aria-expanded','true');
            items2[i].setAttribute('class','accordion-button');
        }
    }
    const defaultUserName = "default username";

    return(
        <>
            <HelmetComponent title="My Reports"/>
            <Header>
                <div className="mx-auto header-avatar">
                    <div>{"!~AK"}</div>
                </div>
                <h1 className="header-title">{"!~"+defaultUserName}</h1>
                <span className="header-subtitle">!~default e-mail</span>
            </Header>
            <div className="p-5 pb-4 text-center">
                <strong>PAST WEEKLY REPORTS</strong>
                <div className="mt-3 short-line mx-auto"> </div>
            </div>
            <div className="w-75 mb-2 m-auto d-grid gap-2 d-flex justify-content-end">
                <button className="btn btn-dark text-light" id="allexpanded" onClick={expandAll}>Expand All</button>
            </div>
            <div className="row w-75 m-auto p-3 pe-4 bg-white mb-1">
                <div className="col-7"> </div>
                <div className="col-1 p-0 ms-2">Morale</div>
                <div className="col-1 p-0 ms-2">Stress</div>
                <div className="col-1 p-0">Workload</div>
            </div>
            <div className="accordion w-75 m-auto mb-5" id="myAccordion">
                <MyReportsCard itemKey={1}/>
                <MyReportsCard itemKey={2}/>
                <MyReportsCard itemKey={3}/>
            </div>
        </>
    )
}
