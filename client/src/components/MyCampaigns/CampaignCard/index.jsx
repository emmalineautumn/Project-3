import React, { useState, useContext, useEffect } from 'react'
import "./CampaignCard.css";
import dbAPI from '../../../utils/dbAPI'
import { AppStateContext } from '../../../AppContext';
let moment = require('moment')

const RaceCard = (props) => {
    const context = useContext(AppStateContext);
    const [campaignNotes, setCampaignNotes] = useState("")
    const [notes, setNotes] = useState("")
    const [show, setShow] = useState(true)

    const newNote = id => {
        dbAPI.addNote({ name: context.state.user, note: campaignNotes, id: id }).then(data => console.log(data))
    }

    const seeNotes = event => {
        event.preventDefault();
        dbAPI.getNotes(event.target.id).then(data => {
            setNotes(data.data.notes)
        })
    }

    return (
        <>
            <div className="campaignCard container">
                <div className="card">
                    <div className="card-content">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="card-content grey lighten-4">
                        <button className="btn" id={props.campaignId} onClick={seeNotes}>Get Notes</button>
                        {notes && notes.map(data => <div><p>{moment(data.date).format("MMM Do YY")}</p><p>Note: {data.note}</p></div>)}
                        <form>
                            <submit className="btn" style={!show ? { display: "none" } : { display: "block" }} onClick={event => { event.preventDefault(); setShow(false) }}>Add Note</submit>
                            <textarea name="campaignNotes" style={show ? { display: "none" } : { display: "block" }} value={campaignNotes} onChange={event => setCampaignNotes(event.target.value)} />
                            <submit className="btn" id={props.campaignId} style={show ? { display: "none" } : { display: "block" }} onClick={event => { event.preventDefault(); newNote(event.target.id); setShow(true) }}>New Note</submit>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RaceCard