import React from 'react'
import "./classCard.css";

// title, hitDie, subclasses, proficiencies, choose, proficiency, saving
const ClassCard = (props) => {
    return (
        <>
            <div className="classCard container" style={{fontFamily: 'Grenze'}}>
            <div className="card">
                <div className="card-content">
                    <h1 className="descriptionClass">{props.title}</h1>
                    <p><span className="subHeadingClass">Hit Die: </span>{props.hitDie}</p>
                    <p><span className="subHeadingClass">Subclasses: </span>{props.subclasses}</p>
                </div>
                <div className="card-content grey lighten-4">
                    <div id="proficiencies">
                        <span className="subHeadingClass">Proficiencies: </span>{props.proficiencies}
                    </div>
                    <div id="proficiency">
                        <span className="subHeadingClass">Choose: </span>{props.choose}
                        <p><span className="subHeadingClass">From: </span></p>
                        {props.proficiency}
                    </div>
                    <div id="saving">
                        <span className="subHeadingClass">Saving Throws: </span>{props.saving}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ClassCard