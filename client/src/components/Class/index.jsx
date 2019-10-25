import React, { useState, useLayoutEffect } from 'react'
import API from '../../utils/API'
import ClassCard from '../ClassCard'
import { useParams } from 'react-router-dom'

const ThisClass = () => {
    let { id } = useParams();
    const [thisClass, setThisClass] = useState()


    const getThisClass = () => {
        API.getClasses(id).then(classData => setThisClass(classData.data))
    }

    useLayoutEffect(getThisClass, [id])

    return (
        <>
            <div className="container">
                <div className="row">
                    
                        {thisClass && <ClassCard
                            key={thisClass._id}
                            title={thisClass.name}
                            hitDie={thisClass.hit_die}
                            subclasses={thisClass.subclasses.map(data => data.name)}
                            proficiencies={thisClass.proficiencies.map(data => data.name + ", ")}
                            choose={thisClass.proficiency_choices.map(data => data.choose + ", ")}
                            proficiency={thisClass.proficiency_choices.map(data => {return <li>{data.from.map(res => res.name + ", ")}</li>})}
                            saving={thisClass.saving_throws.map(data => data.name + " ")}
                        />}
                    
                </div>
            </div>
        </>
    )
}

export default ThisClass;