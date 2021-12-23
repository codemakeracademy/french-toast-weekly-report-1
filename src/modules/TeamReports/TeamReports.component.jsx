import {teamMemberStore} from "../../store/teamMemberStore"
import React, {useState, useEffect} from "react";
import {Header} from "../common/Header/Header.component";
import { NavLink } from "react-router-dom";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import { api } from "../api/api.service";
import {MyReportsCard} from "../MyReports/MyReports.Card.component";
import * as Dates from "../common/Utiles/DateUtiles";

export const TeamReports = () => {
    const [activeTeam, setActiveTeam] = useState(0);
    const [activePeriod, setActivePeriod] = useState(1);
    const dates = Dates.getCurrentAndPreviousDate();
    const firstday = dates[0];
    const lastday = dates[1];
    const firstdayPrev = dates[2];
    const lastdayPrev = dates[3];
    const periods = ["Previous period: " + Dates.DateToString(firstdayPrev) + " — " + Dates.DateToString(lastdayPrev),
        "Current period: " + Dates.DateToString(firstday) + " — " + Dates.DateToString(lastday),"Older Reports"];
    const initials = (item) => {
        return item.split(" ").map((n) => n[0]).join("")
    }
    const [reports, setReports] = useState([]);
    async function getReports(){
        const teamMemberId = 5; // teamMemberId - TEMP
        return [
            await api.get(`companies/0/team-members/${teamMemberId}/reports/to/${Dates.DateToString(firstdayPrev)}/${Dates.DateToString(lastdayPrev)}`, {validateStatus: false})
                .then((response)=> response.data),
            await api.get(`companies/0/team-members/${teamMemberId}/reports/to/${Dates.DateToString(firstday)}/${Dates.DateToString(lastday)}`, {validateStatus: false})
                .then((response)=> response.data)
        ];
    }
    useEffect(() => {
        async function fetchData() {
            try {
                setReports(await getReports());
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    },[]);
    function expandAll(){
        const items = document.getElementsByClassName('accordion-collapse');
        const items2 = document.getElementsByClassName('accordion-button');
        for(let i = 0; i<items.length;i++)
        {
            items[i].setAttribute('class', 'accordion-collapse collapse show');
            items2[i].setAttribute('aria-expanded','true');
            items2[i].setAttribute('class','accordion-button');
        }
    }
    return (
        <>
            <HelmetComponent title="Team Reports"/>
            <Header>
                <div className="pt-2">
                    {
                        ["Immediate Team", "Extended Team"].map((item, index) => (
                            <NavLink to={(item === "Extended Team") ? "weekly-report-history" : "#"} key={index}
                                    className={activeTeam === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"}
                                    onClick={() => setActiveTeam(index)}>{item}</NavLink>
                        ))
                    }
                </div>
                <div className="pt-4 d-flex mx-auto">
                    {teamMemberStore.slice(0, 4).map((item, index) => (
                        <div key={index} style={{zIndex: teamMemberStore.length - index}}
                             className="behind round p-2 rounded-circle">{initials(item)}</div>
                    ))}
                    {teamMemberStore.length > 4 && <div style={{zIndex: teamMemberStore.length}}
                                                        className="round-yellow round p-2 rounded-circle">+{teamMemberStore.length - 4}</div>
                    }
                </div>
            </Header>
            <div className="pb-2 text-center">
                <div className="pt-5">
                    {
                        periods.map((item, index) => (
                            <button key={index}
                                    className={activePeriod === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"}
                                    onClick={() => {setActivePeriod(index)}}>{item}</button>
                        ))
                    }
                </div>
                <div className="p-5">
                    <strong>IMMEDIATE TEAM</strong>
                    <div className="mt-3 short-line mx-auto"> </div>
                </div>
            </div>
            {activePeriod != 2 && (
                <>
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
                        {reports[activePeriod] ? reports[activePeriod].map((item, index)=>{
                            return(
                                <MyReportsCard reportData={item} key={index}/>
                            )
                        }) : <div className="w-100 text-center bg-white mt-2 p-3">There are no members which send reports to you</div>}
                    </div>
                </>
            )}
            {activePeriod == 2 && (
                <>
                    {// OLDER REPORTS
                    }
                </>
            )}
            
        </>
    )
}
