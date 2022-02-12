import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './Layout.module.css';

const Layout = () => {
    return (
        <div className={css.layout}>
            <hr/>
            <Header/>
            <div className={css.wraper}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};