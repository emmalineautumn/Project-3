import React, { useState } from 'react';
import Buttons from './Buttons';

export function Pager(props) {
    const [page, setPage] = useState(0);

    const positions = {
        center: {
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        left: {
            position: 'relative',
            left: '0'
        },
        right: {
            position: 'relative',
            right: '0'
        }
    }

    return (
        <>
            {props.children[page]}
            <div className={positions[props.position]}>
                {page > 0 && <Buttons colors={['red', 'darken-4']} clickThis={() => setPage(page - 1)} title="Previous" />}
                {props.paginate && props.children.map((child, i) => <Buttons colors={i === page ? ['red', 'darken-4', 'white-text'] : ['grey', 'lighten-3', 'black-text']} clickThis={() => setPage(i)} title={i + 1} />)}
                {page < props.children.length - 1 && <Buttons colors={['red', 'darken-4']} clickThis={() => setPage(page + 1)} title="Next" />}
            </div>
        </>
    )
}

export function Page(){
    
}

const Pagify = {
    Pager,
    Page
};

export default Pagify;