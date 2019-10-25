import React, { useState, useLayoutEffect } from 'react'
import API from '../../utils/API'
import SpellCard from '../SpellCard'
import { useParams } from 'react-router-dom'

const ThisSpell = () => {
    let { id } = useParams();
    const [thisSpell, setThisSpell] = useState()


    const getthisSpell = () => {
        API.getSpell(id).then(spellData => setThisSpell(spellData.data))
    }

    useLayoutEffect(getthisSpell, [id])

    return (
        <>
                        {thisSpell && <SpellCard
                            key={thisSpell._id}
                            title={thisSpell.name}
                            classes={thisSpell.classes.map(data => data.name + " ")}
                            range={thisSpell.range}
                            school={thisSpell.school.name}
                            descriptions={thisSpell.desc.map(data => <p key={data}>{data}</p>)}
                        />}
        </>
    )
}

export default ThisSpell;