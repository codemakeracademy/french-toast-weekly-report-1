import React, { useState } from "react";
import { smilesStore } from "../../store/smilesStore";
import { ErrorMessage, Field } from "formik";

export const FillOutCard = (props) => {
    const [active, setActive] = useState(null);

    const changeImage = (index) => {
        setActive(index);
    };

    const [showTextArea, setShowTextArea] = useState(false);
    const ShowTextArea = () => {
        return (
            <>
                <Field as="textarea" className="w-75 m-auto mt-3 form-control" rows="5" placeholder={`Would you like to add any comments about why you rated your  ${props.name} this way? *Optional`} name={`${props.name}Comment`} />
                <ErrorMessage name={`${props.name}Comment`} component="div" />
            </>
        );
    };

    return (
        <div>
            <h3 className={"fw-bold m-auto mt-5"}>How was your {props.name} this week?</h3>
            <div className={"container w-75 mt-3"}>
                <div className={"row"}>
                    {smilesStore.slice(1).map((item, index) => {
                        index++;
                        return (
                            <div key={index} className="custom-rb col m-2">
                                <img
                                    id={index}
                                    alt="smile"
                                    className="emotes"
                                    src={index === active ? item.imageOnClick : item.imageDefault}
                                    onClick={(e) => {
                                        changeImage(index);
                                        setShowTextArea(true);

                                        if (e.target.hasAttribute("name")) {
                                            setActive(-1);
                                            e.target.removeAttribute("name");
                                            setShowTextArea(false);
                                        } else {
                                            document.querySelector(`[name=${props.name}Value]`)?.removeAttribute("name");
                                            e.target.setAttribute("name", `${props.name}Value`);
                                        }
                                    }}
                                    onMouseOver={() => {
                                        if (!showTextArea) {
                                            changeImage(index);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (!showTextArea) {
                                            setActive(-1);
                                        }
                                    }}
                                />
                                <p>{item.Text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            {showTextArea ? <ShowTextArea /> : null}
        </div>
    );
};
