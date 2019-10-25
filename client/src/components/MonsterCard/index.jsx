import React from 'react'
import "./MonsterCard.css";

// title, size, sizeDesc, speed, age, alignment, traitOptions, traits, languages, languageDesc, subraces
const RaceCard = (props) => {
    return (
        <>
            <div className="monsterCard container">
            <div className="card">
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <div>
                        <h6>Type: {props.type}</h6>
                    </div>
                    <div>
                        <h6>Languages: {props.languages}</h6>
                    </div>

                </div>
                <div className="card-content grey lighten-4">
                <h6>Average Size: {props.size}</h6>
                    <p>Senses: {props.senses}</p>
                    <p>Speed: {props.speed}</p>
                    <p>Hit Dice: {props.hitDice}</p>
                    <p>Alignment: {props.alignment}</p>
                    <div>
                        <h6>{props.actions}</h6>
                    </div>
                    <div>
                        <h6>{props.legendaryActions}</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default RaceCard