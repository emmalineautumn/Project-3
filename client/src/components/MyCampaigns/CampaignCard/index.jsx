import React, { useState, useContext } from 'react'
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
        dbAPI.addNote({ name: context.user, note: campaignNotes, id: id }).then(data => console.log(data))
    }

    const seeNotes = event => {
        event.preventDefault();
        dbAPI.getNotes(event.target.id).then(data => {
            setNotes(data.data.notes)
        })
    }

    return (
            <div className="campaignCard container" style={{fontFamily: 'Grenze'}}>
                <div className="card">
                    <div className="card-content">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="card-content grey lighten-4">
                        <button className="btn" id={props.campaignId} onClick={seeNotes} style={{fontFamily: 'Grenze'}}>Get Notes</button>
                        {notes && notes.map(data =>
                            <div key={data._id}>
                                <p key={data.date}>{moment(data.date).format("MMM Do YY")}</p>
                                <p key={data.note}>Note: {data.note}</p>
                            </div>
                        )}
                        <form>
                            <button type="submit"
                                className="btn"
                                style={!show ? { display: "none" } : { display: "block", margin: "auto", fontFamily: 'Grenze' }}
                                onClick={event => {
                                    event.preventDefault(); setShow(false)
                                }}>
                                Add Note
                                </button>
                            <textarea
                                name="campaignNotes"
                                style={show ? { display: "none" } : { display: "block", fontFamily: 'Grenze' }}
                                value={campaignNotes}
                                onChange={event => setCampaignNotes(event.target.value)}
                            />
                            <button type="submit"
                                className="btn"
                                id={props.campaignId}
                                style={show ? { display: "none" } : { display: "block", margin: "auto", fontFamily: 'Grenze' }}
                                onClick={event => {
                                    event.preventDefault(); newNote(event.target.id); setShow(true)
                                }}>
                                Save Note
                                </button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default RaceCard