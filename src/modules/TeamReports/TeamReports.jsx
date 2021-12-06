import {teamMemberStore} from "../../store/teamMemberStore"
import React, {useState} from "react";
import {Header} from "../common/Header";

export const TeamReports = () => {
    const [activeTeam, setActiveTeam] = useState(0)
    const [activePeriod, setActivePeriod] = useState(0)
    const initials = (item) => {
        return item.split(" ").map((n) => n[0]).join("")
    }
    return (
        <>
            <Header>
                <div className="pt-2">
                    {
                        ["Immediate Team", "Extended Team"].map((item, index) => (
                            <button key={index}
                                    className={activeTeam === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"}
                                    onClick={() => setActiveTeam(index)}>{item}</button>
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
            <div className=" team-members row justify-content-md-center">
                <div className="col-md-9">
                    <div className="pb-4 text-center">
                        <div className="pt-2">
                            {
                                ["Previous period: 5/16 - 5/22", "Current Period: 5/23 - 5/29 Older Reports"].map((item, index) => (
                                    <button key={index}
                                            className={activePeriod === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"}
                                            onClick={() => setActivePeriod(index)}>{item}</button>
                                ))
                            }
                        </div>
                        <div className="p-5">
                            <strong>IMMEDIATE TEAM</strong>
                            <div className="mt-3 short-line mx-auto"> </div>
                        </div>
                    </div>
                    <ul className="list-group">
                        <li className="pe-sm-0 shadow-sm rounded list-group-item mb-2 border-1">
                            <div className="d-flex justify-content-end">
                                <div className="m-2">Morale</div>
                                <div className="m-2">Stress</div>
                                <div className="m-2">Workload</div>
                                <div className="expand-all"><a className="py-0 btn btn-dark shadow-none" href="#">Expand All</a>
                                </div>
                            </div>
                        </li>

                        {teamMemberStore.map((item, index) => (
                                <li key={index}
                                    className="shadow-sm rounded list-group-item mb-2 d-flex border-1 align-items-center text-center">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="round p-2 rounded-circle">{item.split(" ").map((n) => n[0]).join("")}</div>
                                        <div className="ms-3 my-1">
                                            <div className="name-team-report">{item}</div>
                                            <div className="color-gray">is missing a report</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
