import React from "react";
import {Article} from "../common/Article/Article.component";
import {Aside} from "../common/Aside/Aside.component";


export function App() {
    return (
        <div className="wrapper d-flex w-100 h-100">
            <Aside/>
            <Article/>
        </div>
    );
}
