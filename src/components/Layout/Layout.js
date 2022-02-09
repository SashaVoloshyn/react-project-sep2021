import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";

const Layout = () => {
    return (
        <div>
            <h1>layout</h1>
            <hr/>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};