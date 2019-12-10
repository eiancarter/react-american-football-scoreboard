import React, {useState} from "react";
import "./App.css";



function Quarter() {
    const [currQuarter, currSetQuarter] = useState(1);

    return (
        <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{currQuarter}</div>
            <div className="quarter__next">
                <button onClick={()=> currSetQuarter(currQuarter + 1)}>Next Quarter</button>
                <button className="quarter-reset" onClick={() => currSetQuarter(1)}>Reset Quarter</button>
            </div>
        </div>
    )
}
export default Quarter;
