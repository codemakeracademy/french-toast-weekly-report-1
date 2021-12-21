import React from "react";
import {ErrorMessage, Field} from "formik";

export const TextArea = ({label, name, ...rest}) => {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as= 'textarea' is={name} name={name} {...rest}/>
            <ErrorMessage name={name} component="div"/>

        </div>
    )
}

export default TextArea;