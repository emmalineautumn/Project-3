import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import ClassCard from '../ClassCard'
import { useParams } from 'react-router-dom'

const ThisClass = () => {
    let { id } = useParams();
    const [thisClass, setThisClass] = useState([])
    const [params, setParams] = useState(id)


    const getThisClass = () => {
        setParams(id)
        API.getClasses(params).then(classData => setThisClass([...thisClass, classData.data]))
    }

    useEffect(getThisClass, [id])

    return (
        <>
            <div className="container">
                <div className="row">
                    {thisClass.map(classData => {
                        console.log(classData);
                        return <ClassCard
                            key={classData._id}
                            title={classData.name}
                            hitDie={classData.hit_die}
                            subclasses={classData.subclasses.map(data => data.name)}
                            proficiencies={classData.proficiencies.map(data => data.name + ", ")}
                            choose={classData.proficiency_choices.map(data => data.choose + ", ")}
                            proficiency={classData.proficiency_choices.map(data => {return <li>{data.from.map(res => res.name + ", ")}</li>})}
                            saving={classData.saving_throws.map(data => data.name + " ")}
                        />
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default ThisClass;