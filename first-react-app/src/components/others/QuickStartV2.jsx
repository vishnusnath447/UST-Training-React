import React from "react";
import './QuickStartV1.css'
import UpperV2 from "./UpperV2";
import LowerV2 from "./LowerV2";

function QuickStartV2(){
    return(
        <>
            <div className="upper">
                <UpperV2/>
            </div>
            <div className="lower">
                <LowerV2/>
            </div>
        </>
    );
}

export default QuickStartV2;