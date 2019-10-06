import React, {useState} from 'react';
import Buttons from './Buttons';

function Pager (props) {
    const [page, setPage] = useState(0);

    return (
        <>
            {props.children[page]}
            {page > 0 && <Buttons clickThis={() => setPage(page - 1)} title="Previous" />}
            {page < props.children.length - 1 && <Buttons clickThis={() => setPage(page + 1)} title="Next" />}
        </>
    )
}

export default Pager;