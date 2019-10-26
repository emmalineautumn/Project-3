import React from 'react'
import "./RaceCard.css";

// title, size, sizeDesc, speed, age, alignment, traitOptions, traits, languages, languageDesc, subraces
const RaceCard = (props) => {
    return (
        <>
            <div className="raceCard container" style={{fontFamily: 'Grenze'}}>
            <div className="card">
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <h6>Average Size: {props.size}</h6>
                    <p>Size Description: {props.sizeDesc}</p>
                    <p>Speed: {props.speed}</p>
                    <h6>Age Description:</h6>
                    <p>{props.age}</p>
                    <p>{props.alignment}</p>
                </div>
                <div className="card-content grey lighten-4">
                    <div>
                        <h5>Traits: </h5>
                       {props.traits}
                    </div>
                    <div>
                        <h5>Languages:</h5>
                        <p>{props.languageDesc}</p>
                        {props.languages}
                    </div>
                    <div>
                        {props.subraces}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default RaceCard