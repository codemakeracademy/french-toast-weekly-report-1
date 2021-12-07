import React from "react";
import img1 from "../../img/smiles/smile_bad.png";
import img2 from "../../img/smiles/smile_alright.png";
import img3 from "../../img/smiles/smile_excelent.png";
import Accordion from 'react-bootstrap/Accordion'

export const MyReportsCard = (itemKey) => {

    console.log(itemKey);
    
    const tempData = [
        {
            Title:"December 6 - December 12, 2021",
        },
        {
            Title:"VeryLow",
            Image: img1,
            Message:"Morale message"
        },
        {
            Title:"Good",
            Image: img2,
            Message:"Stress message"
        },
        {
            Title:"Great",
            Image: img3,
            Message:"Workload message"
        },
        {
            Title:"Your High",
            Message: "My high this week"
        },
        {
            Title:"Your Low",
            Message: "My low this week"
        },
        {
            Title:"Anything else",
            Message: "anything else this week"
        }
    ]
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={itemKey}>
                <Accordion.Header>
                    <div className="row w-100">
                        <div className="col-7 mt-3 me-4">{tempData[0].Title}</div>
                        <div className="col-1 ms-1"><img className="smile-icon" src={tempData[1].Image}/></div>
                        <div className="col-1 ms-2"><img className="smile-icon" src={tempData[2].Image}/></div>
                        <div className="col-1 ms-3"><img className="smile-icon" src={tempData[3].Image}/></div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="param d-flex align-items-start mb-2">
                        <div className="button-wrapper mr-3">
                            <img className="smile-icon" src={tempData[1].Image} alt="smile morale" />
                            <button className={"param-button button-"+tempData[1].Title+" btn text-left"} type="button">MORALE</button>
                        </div>
                        <div className="comment ms-4"><i className="text-secondary">{tempData[1].Message}</i></div>
                    </div>
                    <div className="param d-flex align-items-start mb-2">
                        <div className="button-wrapper mr-3">
                            <img className="smile-icon" src={tempData[2].Image} alt="smile morale" />
                            <button className={"param-button button-"+tempData[2].Title+" btn text-left"} type="button">STRESS</button>
                        </div>
                        <div className="comment ms-4"><i className="text-secondary">{tempData[2].Message}</i></div>
                    </div>
                    <div className="param d-flex align-items-start mb-2">
                        <div className="button-wrapper mr-3">
                            <img className="smile-icon" src={tempData[3].Image} alt="smile morale" />
                            <button className={"param-button button-"+tempData[3].Title+" btn text-left"} type="button">WORKLOAD</button>
                        </div>
                        <div className="comment ms-4"><i className="text-secondary">{tempData[3].Message}</i></div>
                    </div>
                    <h5 className="pt-4">Weekly High</h5>
                    <p className="pb-2">{tempData[4].Message}</p>
                    <h5>Weekly Low</h5>
                    <p className="pb-2">{tempData[5].Message}</p>
                    <h5>Anything Else</h5>
                    <p className="pb-2">{tempData[6].Message}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default MyReportsCard;