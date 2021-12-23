/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { Header } from "../common/Header/Header.component";
import { WeekAgo } from "./WeekAgo.component";
import { WeeksHeader } from "./WeeksHeader.component";
import { weekAgoStore } from "../../store/weekAgoStore";
import { WeeklyReportHistoryCard } from "./WeeklyReportHistoryCard.component";
import { WeeklyReportHistoryCardAverage } from "./WeeklyReportHistoryCardAverage.component";
import { NavLink } from "react-router-dom";
import { HelmetComponent } from "../common/Helmet/Helmet.component";
import moment from "moment";
import getWeeklyReportHistory from "./WeeklyReport.service";
import { Context } from "../app/App.component";

export const WeeklyReportHistory = () => {
    const [activeTeam, setActiveTeam] = useState(1);
    const [activePeriod, setActivePeriod] = useState(2);
    const [activeMoraleFilter, setActiveMoraleFilter] = useState(0);
    const [reportHistory, setReportHistory] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);

    const averageMorales = ["Overall", "Morales", "Stress", "Workload"];

    function getCurrentPeriod() {
        const startDate = moment().startOf("isoWeek");
        const endDate = moment().endOf("isoWeek");
        return `${startDate.month() + 1}/${startDate.date()} - ${endDate.month() + 1}/${endDate.date()}`;
    }

    function getPreviousPeriod() {
        const startDate = moment().subtract(1, "week").startOf("isoWeek");
        const endDate = moment().subtract(1, "week").endOf("isoWeek");
        return `${startDate.month() + 1}/${startDate.date()} - ${endDate.month() + 1}/${endDate.date()}`;
    }

    async function InitReports() {
        const data = await getWeeklyReportHistory(48, "20211018", "20211220");
        setReportHistory(data);
        let teamMembersTemp = [];
        data.forEach((item) => {
            teamMembersTemp.push(item["teamMemberName"]);
        });
        setTeamMembers(teamMembersTemp);
    }

    useEffect(InitReports, []);

    const {currentUser, selectedMember} = useContext(Context);

    return (
        <>
            <HelmetComponent title="Weekly Report History" />
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
                            {[`Previous period: ${getPreviousPeriod()}`, `Current Period: ${getCurrentPeriod()}`, "Older Reports"].map((item, index) => (
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
                                {activePeriod == 2 && (
                                    <WeeksHeader align="between">
                                        {weekAgoStore.map((item, index) => (
                                            <WeekAgo key={index} period={item} />
                                        ))}
                                    </WeeksHeader>
                                )}

                                {activePeriod == 1 && (
                                    <WeeksHeader align="end">
                                        {["Current"].map((item, index) => (
                                            <WeekAgo key={index} period={item} />
                                        ))}
                                    </WeeksHeader>
                                )}

                                {activePeriod == 0 && (
                                    <WeeksHeader align="end">
                                        {["Previous"].map((item, index) => (
                                            <WeekAgo key={index} period={item} />
                                        ))}
                                    </WeeksHeader>
                                )}
                            </div>

                            <WeeklyReportHistoryCardAverage cardName={averageMorales[activeMoraleFilter]} reportHistory={reportHistory} filter={activeMoraleFilter} />
                        </div>

                        <div className="pt-5">
                            <strong>EXTENDED TEAM</strong>
                            <div className="mt-3 short-line mx-auto"> </div>
                        </div>
                        <div className="extended-team container d-flex flex-column mt-5">
                            <div className="weeks-block d-flex align-items-center justify-content-end">
                                {activePeriod == 2 && (
                                    <WeeksHeader align="between">
                                        {weekAgoStore.map((item, index) => (
                                            <WeekAgo key={index} period={item} />
                                        ))}
                                    </WeeksHeader>
                                )}

                                {activePeriod == 1 && (
                                    <WeeksHeader align="end">
                                        {["Current"].map((item, index) => (
                                            <WeekAgo key={index} period={item} />
                                        ))}
                                    </WeeksHeader>
                                )}

                                {activePeriod == 0 && (
                                    <WeeksHeader align="end">
                                        {["Previous"].map((item, index) => (
                                            <WeekAgo key={index} period={item} />
                                        ))}
                                    </WeeksHeader>
                                )}
                            </div>

                            {teamMembers.map((item, index) => (
                                <WeeklyReportHistoryCard key={index} cardName={item} id={index.toString()} reportHistory={reportHistory} filter={activeMoraleFilter} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
