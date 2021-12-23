/* eslint-disable no-empty */
import React from "react";
import { smilesStore } from "../../store/smilesStore";

export const WeeklyReportHistoryCardAverage = ({ cardName, reportHistory, filter }) => {
    let userAverage = [];
    let averageSmiles = [];
    let sum;

    if (filter === 0) {
        try {
            for (let i = 0; i < 10; i++) {
                sum = 0;
                reportHistory.forEach((item) => {
                    sum += item.teamMemberReports[i].reduce((a, b) => a + b, 0) / 3;
                });
                userAverage.push(Math.ceil(sum / reportHistory.length));
            }
            userAverage.forEach((value) => {
                averageSmiles.push(smilesStore[value]);
            });
        } catch {}
    } else if (filter === 1) {
        try {
            for (let i = 0; i < 10; i++) {
                sum = 0;
                reportHistory.forEach((item) => {
                    sum += item.teamMemberReports[i][0];
                });
                userAverage.push(Math.ceil(sum / reportHistory.length));
            }
            userAverage.forEach((value) => {
                averageSmiles.push(smilesStore[value]);
            });
        } catch {}
    } else if (filter === 2) {
        try {
            for (let i = 0; i < 10; i++) {
                sum = 0;
                reportHistory.forEach((item) => {
                    sum += item.teamMemberReports[i][1];
                });
                userAverage.push(Math.ceil(sum / reportHistory.length));
            }
            userAverage.forEach((value) => {
                averageSmiles.push(smilesStore[value]);
            });
        } catch {}
    } else if (filter === 3) {
        try {
            for (let i = 0; i < 10; i++) {
                sum = 0;
                reportHistory.forEach((item) => {
                    sum += item.teamMemberReports[i][2];
                });
                userAverage.push(Math.ceil(sum / reportHistory.length));
            }
            userAverage.forEach((value) => {
                averageSmiles.push(smilesStore[value]);
            });
        } catch {}
    }

    return (
        <div className="card card-header d-flex flex-row align-items-center justify-content-between pt-3 pb-3 pr-0 mb-2">
            <div className="card-name">{cardName}</div>
            <div className="smiles d-flex align-items-center justify-content-between">
                {averageSmiles.map((item, index) => (
                    <img key={index} className="smile mr-3" src={item?.imageSmall} alt={item?.alt} />
                ))}
            </div>
        </div>
    );
};
