import React from 'react';
import { CircularProgress } from '@material-ui/core';
import "./style.css";

function Loader() {
    return (
        <div className="spinnerCont" >
            <CircularProgress />
        </div>
    )
}

export default Loader;
 