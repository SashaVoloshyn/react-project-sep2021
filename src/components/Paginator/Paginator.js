import React from 'react';
import {useDispatch} from "react-redux";

import css from './Paginator.module.css';
import {createPages} from "./HelpFunk";


const Paginator = ({totalCount, currentPage, Action}) => {
    const pages = [];
    const dispatch = useDispatch();

    createPages(pages, totalCount, currentPage)
    return (
        <div>
            <div className={css.pages}>{pages.map((page, index) =>
                <span className={css.page} key={index}
                      onClick={() => dispatch(Action.pagination({page}))}

            >{page}</span>)}</div>

        </div>
    );
};


export {Paginator};