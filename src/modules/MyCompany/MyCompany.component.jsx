import React, {useState} from "react";
import {EditMyCompany} from "./EditMyCompany.component";
import {NewCompany} from "./NewCompany.component";

export const MyCompany = () => {

    const [company, setCompany] = useState(null)
    const addNewCompany = (companyNameObj) => {
        let today = new Date()
        let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        setCompany({...companyNameObj, JoinDate: date})
    }
    const changeNameCompany = (companyNameObj) => {
        setCompany({...company, ...companyNameObj} )
    }

    return (
        <>
            {company?<EditMyCompany changeNameCompany={(companyNameObj)=>changeNameCompany(companyNameObj)}  company={company}/> : <NewCompany addNewCompany={(companyNameObj)=>addNewCompany(companyNameObj)}/> }
        </>
    );
};
