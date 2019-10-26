import React from 'react'
import "./SpellCard.css";

const SpellCard = (props) => {
    return (
        <>
            <div className="spellCard" style={{fontFamily: 'Grenze'}}>
            <div className="card">
                <div className="card-content">
                    <h3>{props.title}</h3>
                    <h6>Classes: {props.classes}</h6>
                </div>
                <div className="card-content grey lighten-4">
                    <div>
                        <h6>Range: {props.range}</h6>
                    </div>
                    <div>
                        <h6>School: {props.school}</h6>
                    </div>
                    <div>
                        <h5>Description</h5>
                        {props.descriptions}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SpellCard