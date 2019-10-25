import React, { useState, useLayoutEffect } from 'react'
import API from '../../utils/API'
import RaceCard from '../RaceCard'
import { useParams } from 'react-router-dom'

const ThisRace = () => {
    let { id } = useParams();
    const [thisRace, setThisRace] = useState()


    const getthisRace = () => {
        API.getRace(id).then(raceData => setThisRace(raceData.data))
    }

    useLayoutEffect(getthisRace, [id])

    // title, size, sizeDesc, speed, age, alignment, traitOptions, traits, languages, languageDesc, subraces
    return (
        <>
            <div className="container">
                <div className="row">
                    
                        {thisRace && <RaceCard
                            key={thisRace._id}
                            title={thisRace.name}
                            size={thisRace.size}
                            sizeDesc={thisRace.size_description}
                            alignment={thisRace.alignment}
                            speed={thisRace.speed}
                            age={thisRace.age}
                            languages={thisRace.languages.map(data => <p>{data.name}</p>)}
                            languageDesc={thisRace.language_desc}
                            subrace={"Subraces : " + thisRace.subraces.map(data => data.name)}
                            traits={thisRace.traits.map(data => <p>{data.name}</p>)}
                        />}
                    
                </div>
            </div>
        </>
    )
}

export default ThisRace;