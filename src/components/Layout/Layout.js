import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import "./Layout.css";

import {Header} from "../Header/Header";

const Layout = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='layout'>
            <hr/>
            <Header checked={checked} handleChange={handleChange}/>
            <div className={checked?'wraper dark-theme':'wraper'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};