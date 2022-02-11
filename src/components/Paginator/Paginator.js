import React from 'react';
import {useSearchParams} from "react-router-dom";


const Paginator = ({data}) => {
    let [params] = useSearchParams();

    if (data) {
        const pagesArr = [];

        for (let i = 1; i <= 6; i++) {
            pagesArr.push(i)
            console.log(params);
            console.log(pagesArr);
        }

        return (
            <div>
                <button to={`?page=${+params.get('page') - 1}`}>Prev</button>
                {pagesArr.map(page => <button key={data.page} to={`?page=${data.page}`} isNav={true}>{data.page}</button>)}
                <button to={`?page=${+params.get('page') + 1}`} >Next</button>
            </div>
        );
    }
    return (
<div>
    <h1>sorry</h1>
</div>
    );
};

export {Paginator};