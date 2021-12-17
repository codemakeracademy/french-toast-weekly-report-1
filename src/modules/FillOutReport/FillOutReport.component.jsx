import React, {useState} from "react";
import {FillOutReportHeader} from './FillOutReport.Header.component';
import {FillOutCard} from './FillOutReport.Card.component';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import {HelmetComponent} from "../common/Helmet/Helmet.component";


export const FillOutReport = () => {
    const [sendError, setSendError] = useState(false)
    const SendError = () => (
        <p className="text-danger fw-bold">All fields are required unless marked as optional.</p>
    )

    function sendReport() {
        setSendError(false);
        const requiredFields = document.getElementsByClassName('req');
        for (let i = 0; i < requiredFields.length; i++) {
            if (requiredFields[i].value === '') {
                setSendError(true);
            }
        }
    }

    return (
        <>
            <HelmetComponent title="Fill Out Report"/>
            <div className={"text-center"}>
                <FillOutReportHeader/>
                <FillOutCard name="morale"/>
                <FillOutCard name="stress"/>
                <FillOutCard name="workload"/>
                <h3 className={"fw-bold m-auto mt-5"}>What was your high this week?</h3>
                <textarea className="w-75 m-auto mt-3 form-control req" rows="5"
                          placeholder="What was your personal or professional high this week? What's the one thing you accomplished at work this week?"></textarea>
                <h3 className={"fw-bold m-auto mt-5"}>What was your low this week?</h3>
                <textarea className="w-75 m-auto mt-3 form-control req" rows="5"
                          placeholder="What was your personal or professional low this week?"></textarea>
                <h3 className={"fw-bold m-auto mt-5"}>Anything else?</h3>
                <textarea className="w-75 m-auto mt-3 form-control" rows="5" maxLength="400"
                          placeholder="Is there anything else you would like to share with your leader? *Optional"></textarea>
                <div className="w-50 m-auto mb-5 mt-5">
                    <p className="text-start mb-1">Choose date</p>
                    <DateRangePicker>
                        <input type="text" className="form-control m-auto"/>
                    </DateRangePicker>
                </div>
                {sendError ? <SendError/> : null}
                <button className="btn btn-secondary fw-bold w-50 mb-5" onClick={sendReport}>Send Weekly Report</button>
            </div>
        </>
    )
}
