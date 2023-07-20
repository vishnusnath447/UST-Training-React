import React from "react";

function MarkList({values}){
    return(
        <>
            <table>
                <tbody>
                    {
                        values.map((element,index) =>
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                                <td>{element.marks}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default MarkList;