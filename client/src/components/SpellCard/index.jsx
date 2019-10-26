import React from 'react'
import "./SpellCard.css";

const SpellCard = (props) => {
    return (
        <>
            <div className="spellCard" style={{fontFamily: 'Grenze'}}>
                <div className="card">
                    <div className="card-content">
                        <h1 className="descriptionSpell">{props.title}</h1>
                        <p><span className="subHeadingSpell">Classes: </span>{props.classes}</p>
                        <p><span className="subHeadingSpell">Range: </span>{props.range}</p>
                        <p><span className="subHeadingSpell">School: </span>{props.school}</p>
                    </div>
                    <div className="card-content grey lighten-4">
                        <div>
                            <h5 className="subHeadingSpellDescription">Description</h5>
                            {props.descriptions}
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}

export default SpellCard