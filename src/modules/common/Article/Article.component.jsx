import React, {useState} from "react";
import {Switch, Route} from 'react-router-dom'
import {LaunchGuide} from "../../LaunchGuide/LaunchGuide.component";
import {InviteYourTeam} from "../../InviteYourTeam/InviteYourTeam.component";
import {TeamMembers} from "../../TeamMembers/TeamMembers.component";
import {EditMemberInformation} from "../../EditMemberInformation/EditMemberInformation.component";
import {TeamReports} from "../../TeamReports/TeamReports.component";
import {FeedbackBtn} from "../buttons/FeedbackBtn..component";
import {HelpBtn} from "../buttons/HelpBtn..component";
import {FillOutReport} from "../../FillOutReport/FillOutReport.component";
import {MyReports} from "../../MyReports/MyReports.component";
import {WeeklyReportHistory} from "../../WeeklyReportHistory/WeeklyReportHistory.component";
import {Aside} from "../Aside/Aside.component";
import {MyCompany} from "../../MyCompany/MyCompany.component";

export const Article = ({dataFromBD, setUpdateLocalstorage}) => {

    const [editableMember, setEditableMember] = useState(null)
    const onClickEdit = (member) => {
        setEditableMember(member)
    }

    return (
        <div className="wrapper d-flex w-100 h-100">
            <Aside/>
            <main className="flex-grow-1">
                <FeedbackBtn/>
                <HelpBtn/>
                <article className="w-100 h-100">
                    <Switch>
                        <Route exact path="/">
                            <LaunchGuide/>
                        </Route>
                        <Route path="/invite-your-team">
                            <InviteYourTeam/>
                        </Route>
                        <Route path="/my-reports">
                            <MyReports/>
                        </Route>
                        <Route path="/fill-out-a-report">
                            <FillOutReport/>
                        </Route>
                        <Route path="/team-reports">
                            <TeamReports/>
                        </Route>
                        <Route path="/weekly-report-history">
                            <WeeklyReportHistory/>
                        </Route>
                        <Route path="/my-company">
                            <MyCompany dataFromBD={dataFromBD} setUpdateLocalstorage={setUpdateLocalstorage}/>
                        </Route>
                        <Route path="/team-members">
                            <TeamMembers onClickEdit={onClickEdit}/>
                        </Route>
                        <Route path="/edit-member-information">
                            <EditMemberInformation dataFromBD={dataFromBD} editableMember={editableMember}/>
                        </Route>
                    </Switch>
                </article>
            </main>
        </div>

    )
}
