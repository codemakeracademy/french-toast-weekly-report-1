import React from "react";
import {Textarea} from "./Textarea.component";

export const FormikControl = ({control, ...rest}) => {
    switch (control) {
        case 'textarea':
            return <Textarea {...rest}/>
    }
}