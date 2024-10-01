import React, { useState, useLayoutEffect, useEffect } from 'react'
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


    useEffect(() => {
        console.log(thisClass)
    }, [thisClass])
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
                            choose={thisClass.proficiency_choices.map(data => <p>{data.choose + ", " + data.desc}</p>)}
                            proficiency={thisClass.proficiency_choices.map(data => data.from.options.map(res => <p>{res.item ? res.item.name : "" }</p>))}
                            saving={thisClass.saving_throws.map(data => data.name + " ")}
                        />}
                    
                </div>
            </div>
        </>
    )
}

export default ThisClass;