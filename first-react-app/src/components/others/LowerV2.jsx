import React from "react";
import ListElement from "./ListElement";

function LowerV2(){
    const array = ['How to create and nest components','How to add markup and styles','How to display data','How to render conditions and lists',
    'How to respond to events and update the screen','How to share data between components'];
    return(
        <>
            <h2>You will learn</h2>
            <ul>
                <ListElement val={array} />
            </ul>
        </>
    );
}

export default LowerV2;