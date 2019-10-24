import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import ClassCard from '../ClassCard'
import { useParams } from 'react-router-dom'

const ThisClass = () => {
    const [thisClass, setThisClass] = useState([])
    const [params, setParams] = useState("1")

    let id = useParams();

    const getThisClass = () => {
        setParams(id.id)
        console.log(params)
        API.getClasses(params).then(classData => setThisClass([...thisClass, classData.data]))

    }

    useEffect(() => getThisClass(), [])

    return (
        <>
            {thisClass.map(classData => 
                <ClassCard
                    key={classData.url}
                    title={classData.name}
                    hitDie={classData.hit_die}
                    subclasses={classData.subclasses.map(data => data.name)}
                    proficiencies={classData.proficiencies.map(data => data.name + ", ")}
                    choose={classData.proficiency_choices.map(data => data.choose)}
                    proficiency={classData.proficiency_choices.map(data => data.from.map(res => res.name + " "))}
                    saving={classData.saving_throws.map(data => data.name + " ")}
                />
            )}
        </>
    )
}

export default ThisClass;