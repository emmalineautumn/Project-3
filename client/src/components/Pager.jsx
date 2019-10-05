import React, {useState} from 'react';

function Pager (props) {
    const [page, setPage] = useState(0);

    return (
        <>
            {props.children[page]}
            {page > 0 && <button onClick={() => setPage(page - 1)}>Previous</button>}
            {page < props.children.length - 1 && <button onClick={() => setPage(page + 1)}>Next</button>}
        </>
    )
}

export default Pager;