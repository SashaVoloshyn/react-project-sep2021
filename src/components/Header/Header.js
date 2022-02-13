import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.header_wrap}>
                <div className={css.header_nav}>
                    <div className={css.logo}>

                        <img src='https://img.icons8.com/dotty/60/000000/circled-i.png' alt="logo"/>
                        <h2 className={css.аnimTxt}>I Logo</h2>
                    </div>
                    <div className={css.nav}>
                        <Link to={'/'}> <span>Movies</span></Link>
                        <Link to={'topMovies'}> <span>TOP-Movies</span> </Link>

                    </div>
                </div>

                <div className={css.header_auth}>
                    <img src="https://img.icons8.com/color/40/000000/my-melody.png" alt='user'/>
                    <span>User</span>

                </div>
            </div>
        </div>
    );
};

export {Header};