import React, {useState} from "react";
import {EditMyCompany} from "./EditMyCompany.component";

export const MyCompany = () => {
    const [company, setCompany] = useState(null)
    const changeNameCompany = (companyNameObj) => {
        setCompany({...company, ...companyNameObj} )
    }
    return (
        <>
            <EditMyCompany changeNameCompany={(companyNameObj)=>changeNameCompany(companyNameObj)}  company={company}/> }
        </>
    );
};
