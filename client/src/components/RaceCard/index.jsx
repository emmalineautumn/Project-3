import React from 'react'
import "./RaceCard.css";

// title, size, sizeDesc, speed, age, alignment, traitOptions, traits, languages, languageDesc, subraces
const RaceCard = (props) => {
    return (
        <>
            <div className="raceCard container">
            <div className="card">
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <h6>{props.size}</h6>
                    <p>Size Description: {props.sizeDesc}</p>
                    <p>Speed: {props.speed}</p>
                    <h6>Age Description:</h6>
                    <p>{props.age}</p>
                    <p>{props.alignment}</p>
                </div>
                <div className="card-content grey lighten-4">
                    <div>
                       <ol>{props.traits}</ol>
                    </div>
                    <div>
                        <h4>Languages: </h4>
                        <p>{props.languageDesc}</p>
                        {props.languages}
                    </div>
                    <div>
                        <ol>{props.subraces}</ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default RaceCard