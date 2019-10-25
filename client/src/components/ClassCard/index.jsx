import React from 'react'
import "./classCard.css";

// title, hitDie, subclasses, proficiencies, choose, proficiency, saving
const ClasCard = (props) => {
    return (
        <>
            <div className="classCard container">
            <div className="card">
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <p>Hit Die: {props.hitDie}</p>
                    <p>Subclasses: {props.subclasses}</p>
                </div>
                <div className="card-content grey lighten-4">
                    <div id="proficiencies">
                        Proficiencies: {props.proficiencies}
                    </div>
                    <div id="proficiency">
                        choose: {props.choose}
                        <p>{props.proficiency}</p>
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

export default ClasCard