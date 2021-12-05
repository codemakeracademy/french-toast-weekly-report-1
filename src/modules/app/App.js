import React from "react";
import {Article} from "../common/Article";
import {Aside} from "../common/Aside";
import helpPng from "../../img/Help.png";



export function App() {
  return (
      <div className="wrapper d-flex w-100 h-100">
          <Aside/>
          <main className="flex-grow-1">
              <div className="btn btn-feedback position-fixed end-0 top-50">
                  Feedback
              </div>
              <div className="d-flex btn btn-warning btn-help rounded-pill position-fixed end-0 bottom-0">
                  <img className="help-img" src={helpPng} alt="help"/>
                  <div>
                      Help
                  </div>
              </div>
              <Article/>
          </main>

      </div>
  );
}
