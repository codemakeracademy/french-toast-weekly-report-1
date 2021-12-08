import React, { useState } from "react";
import { Header } from "../common/Header/Header.component";
import { WeekAgo } from "./WeekAgo.component";
import { weekAgoStore } from "../../store/weekAgoStore";
import { smiles } from "../../store/weekAgoStore";
import { teamMemberStore } from "../../store/teamMemberStore";
import { WeeklyReportHistoryCard } from "./WeeklyReportHistoryCard.component";
import { NavLink } from "react-router-dom";

export const WeeklyReportHistory = () => {
    const [activeTeam, setActiveTeam] = useState(1);
    const [activePeriod, setActivePeriod] = useState(0);
    const [activeMoraleFilter, setActiveMoraleFilter] = useState(0);

    return (
        <>
            <Header>
                <div className="pt-2">
                    {["Immediate Team", "Extended Team"].map((item, index) => (
                        <NavLink to={item === "Immediate Team" ? "team-reports" : "#"} key={index} className={activeTeam === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"} onClick={() => setActiveTeam(index)}>
                            {item}
                        </NavLink>
                    ))}
                </div>
                <div className="header-info">
                    <div className="header-text team-title mt-4">
                        <b>Weekly Report History</b>
                    </div>
                    <div className="header-team-text mt-4">Get a bigger picture of how your team has been doing over time.</div>
                </div>
            </Header>
            <div className=" team-members row justify-content-md-center">
                <div className="col-md-9">
                    <div className="pb-4 text-center">
                        <div className="pt-5">
                            {["Previous period: 5/16 - 5/22", "Current Period: 5/23 - 5/29", "Older Reports"].map((item, index) => (
                                <button key={index} className={activePeriod === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"} onClick={() => setActivePeriod(index)}>
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="pt-4">
                            {["Overall", "Morale", "Stress", "Workload"].map((item, index) => (
                                <button key={index} className={activeMoraleFilter === index ? "py-0 btn btn-dark btnActive" : "py-0 btn btn-dark btnDisable"} onClick={() => setActiveMoraleFilter(index)}>
                                    {item}
                                </button>
                            ))}
                        </div>
                        
                        <div className="pt-5">
                            <strong>EXTENDED TEAM AVERAGE</strong>
                            <div className="mt-3 short-line mx-auto"> </div>
                        </div>
                        <div className="overall container d-flex flex-column mt-5">
                            <div className="weeks-block d-flex align-items-center justify-content-end">
                                <div className="weeks d-flex align-items-center justify-content-between mb-1 mr-4">
                                    {weekAgoStore.map((item, index) => (
                                        <WeekAgo key={index} period={item} />
                                    ))}
                                </div>
                            </div>
                            <WeeklyReportHistoryCard cardName="Overall" smiles={smiles} />
                        </div>

                        <div className="pt-5">
                            <strong>EXTENDED TEAM</strong>
                            <div className="mt-3 short-line mx-auto"> </div>
                        </div>
                        <div className="extended-team container d-flex flex-column mt-5">
                            <div className="weeks-block d-flex align-items-center justify-content-end">
                                <div className="weeks d-flex align-items-center justify-content-between mb-1 mr-4">
                                    {weekAgoStore.map((item, index) => (
                                        <WeekAgo key={index} period={item} />
                                    ))}
                                </div>
                            </div>
                            {teamMemberStore.map((item, index) => (
                                <WeeklyReportHistoryCard key={index} cardName={item} smiles={smiles} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
