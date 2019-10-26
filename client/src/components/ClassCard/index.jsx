import React from 'react'
import "./classCard.css";

// title, hitDie, subclasses, proficiencies, choose, proficiency, saving
const ClassCard = (props) => {
    return (
        <>
            <div className="classCard container" style={{fontFamily: 'Grenze'}}>
            <div className="card">
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <p>Hit Die: d{props.hitDie}</p>
                    <p>Subclasses: {props.subclasses}</p>
                </div>
                <div className="card-content grey lighten-4">
                    <div id="proficiencies">
                        Proficiencies: {props.proficiencies}
                    </div>
                    <div id="proficiency">
                        choose: {props.choose}
                        <p>From: </p>
                        <ol>{props.proficiency}</ol>
                    </div>
                    <div id="saving">
                        Saving Throws: {props.saving}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ClassCard