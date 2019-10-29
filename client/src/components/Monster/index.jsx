import React, { useState, useLayoutEffect } from 'react'
import API from '../../utils/API'
import MonsterCard from '../MonsterCard'
import { useParams } from 'react-router-dom'

const ThisMonster = () => {
    let { id } = useParams();
    const [thisMonster, setThisMonster] = useState()


    const getthisMonster = () => {
        API.getMonster(id).then(monster => setThisMonster(monster.data))
    }

    useLayoutEffect(getthisMonster, [id])

    return (
        <>
            <div className="container">
                <div className="row">
                    {console.log(thisMonster)}
                        {thisMonster && <MonsterCard
                            key={thisMonster._id}
                            title={thisMonster.name ? thisMonster.name: null}
                            size={thisMonster.size ? thisMonster.size: null}
                            hitDice={thisMonster.hit_dice ? thisMonster.hit_dice: null}
                            senses={thisMonster.senses ? thisMonster.senses: null}
                            alignment={thisMonster.alignment ? thisMonster.alignment: null}
                            speed={thisMonster.speed ? thisMonster.speed : null}
                            age={thisMonster.age ? thisMonster.age : null}
                            languages={thisMonster.languages ? thisMonster.languages: null}
                            actions={thisMonster.actions ? "Actions: " + thisMonster.actions.map(data => " " + data.name): null}
                            legendaryActions={thisMonster.legendaryActions ? "Legendary Actions: " + thisMonster.legendary_actions.map(data => " " + data.name) : null}
                            type={thisMonster.type ? thisMonster.type : null}
                        />}
                </div>
            </div>
        </>
    )
}

export default ThisMonster;