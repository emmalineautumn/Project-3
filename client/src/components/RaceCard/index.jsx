import React from 'react'
import "./RaceCard.css";

// title, size, sizeDesc, speed, age, alignment, traitOptions, traits, languages, languageDesc, subraces
const RaceCard = (props) => {
    return (
      <>
        <div className="raceCard container" style={{ fontFamily: "Grenze" }}>
          <div className="card">
            <div className="card-content">
              <h1 className="descriptionRace">{props.title}</h1>
                <p><span className="subHeadingRace">Average Size: </span> {props.size}</p>
                <p><span className="subHeadingRace">Size Description: </span> {props.sizeDesc}</p>
              <p>
                <span className="subHeadingRace">Speed: </span> {props.speed}
              </p>
              <p className="subHeadingRace">Age Description: </p>
                <p>{props.age}</p>
                <p>{props.alignment}</p>
            </div>
            <div className="card-content grey lighten-4">
              <div>
                <p className="subHeadingRace">Traits: </p>
                {props.traits}
              </div>
              <div>
                <p className="subHeadingRace">Languages: </p>
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