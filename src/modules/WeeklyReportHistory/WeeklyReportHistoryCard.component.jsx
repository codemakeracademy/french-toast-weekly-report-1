/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React from "react";
import { smilesStore } from "../../store/smilesStore";

export const WeeklyReportHistoryCard = ({ cardName, id, reportHistory, filter }) => {
    let values;
    let userSmiles = [];
    let userAverage = [];
    let averageSmiles = [];
    let data = new Map(Object.entries(reportHistory));

    if (filter === 0) {
        try {
            values = data.get(id).teamMemberReports;
            values.forEach((value) => {
                let sum = value.reduce((a, b) => a + b, 0);
                userSmiles.push(smilesStore[Math.round(sum / value.length)]);
            });
        } catch {}
    } else if (filter === 1) {
        try {
            values = data.get(id).teamMemberReports;
            values.forEach((value) => {
                userSmiles.push(smilesStore[value[0]]);
            });
        } catch {}
    } else if (filter === 2) {
        try {
            values = data.get(id).teamMemberReports;
            values.forEach((value) => {
                userSmiles.push(smilesStore[value[1]]);
            });
        } catch {}
    } else if (filter === 3) {
        try {
            values = data.get(id).teamMemberReports;
            values.forEach((value) => {
                userSmiles.push(smilesStore[value[2]]);
            });
        } catch {}
    }

    return (
        <div className="card card-header d-flex flex-row text-start justify-content-between pt-3 pb-3 pr-0 mb-2">
            <div className="card-name mt-1">{cardName}</div>
            <div className="smiles d-flex align-items-center justify-content-between">
                {userSmiles.map((item, index) => (
                    <img key={index} className="smile mr-3" src={item.imageSmall} alt={item.alt} />
                ))}
            </div>
        </div>
    );
};
