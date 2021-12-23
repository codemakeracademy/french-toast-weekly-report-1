import {teamMemberStore} from "../../store/teamMemberStore"
import React, {useState, useEffect} from "react";
import {Header} from "../common/Header/Header.component";
import { NavLink } from "react-router-dom";
import {HelmetComponent} from "../common/Helmet/Helmet.component";
import { api } from "../api/api.service";
import {MyReportsCard} from "../MyReports/MyReports.Card.component";

export const TeamReports = () => {
    const [activeTeam, setActiveTeam] = useState(0);
    const [activePeriod, setActivePeriod] = useState(1);
    const today = new Date;
    const firstdayPrev = new Date;
    const lastdayPrev = new Date;
    const first = today.getDate() - today.getDay() + 1;
    const last = first + 6;
    const firstday = new Date(today.setDate(first));
    const lastday = new Date(today.setDate(last));

    function DateToString(date){
        return date.getFullYear() + "-" +(date.getMonth() + 1) + "-" + date.getDate()
    }
    firstdayPrev.setDate(firstday.getDate()-7);
    lastdayPrev.setDate(lastday.getDate()-7);
    const periods = ["Previous period: " + DateToString(firstdayPrev) + " — " + DateToString(lastdayPrev),
        "Current period: " + DateToString(firstday) + " — " + DateToString(lastday),"Older Reports"];
    const initials = (item) => {
        return item.split(" ").map((n) => n[0]).join("")
    }
    const [reports, setReports] = useState([]);
    async function getReports(){
        const companyId = 1, teamMemberId = 5; // teamMemberId - TEMP
        return [
            await api.get(`https://localhost:5001/api/companies/${companyId}/team-members/${teamMemberId}/reports/to/${DateToString(firstdayPrev)}/${DateToString(lastdayPrev)}`, {validateStatus: false})
                .then((response)=> response.data),
            await api.get(`https://localhost:5001/api/companies/${companyId}/team-members/${teamMemberId}/reports/to/${DateToString(firstday)}/${DateToString(lastday)}`, {validateStatus: false})
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
                <h1 className="fw-lighter pt-4">Your team <span
                    className="fw-bolder">has not submitted reports</span> this weak
                </h1>
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
    )
}
