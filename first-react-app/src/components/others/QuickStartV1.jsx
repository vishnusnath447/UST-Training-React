import React from "react";
import './QuickStartV1.css'

function QuickStartV1(){
    return(
        <>
            <div className="upper">
                <h1>Quick Start</h1>
                <p>Welcome to the React documentation! This page will give you an introduction to the 80% of<br />
                React concepts that you will use on a daily basis.</p>
            </div>
            <div className="lower">
                <h2>You will learn</h2>
                <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </>
    );
}

export default QuickStartV1;