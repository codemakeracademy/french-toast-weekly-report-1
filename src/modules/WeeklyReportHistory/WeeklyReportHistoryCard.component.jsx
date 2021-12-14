import React from "react";

export const WeeklyReportHistoryCard = ({ cardName, smiles }) => {
    return (
        <div className="card card-header d-flex flex-row align-items-center justify-content-between pt-3 pb-3 pr-0 mb-2">
            <div className="card-name">{cardName}</div>
            <div className="smiles d-flex align-items-center justify-content-between">
                {smiles.map((item, index) => (
                    <img key={index} className="smile mr-3" src={item.src} alt={item.alt} />
                ))}
            </div>
        </div>
    );
};
