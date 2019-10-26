import React, { useState } from 'react'
import './Character.css';

const Character = (props) => {
    const [sprites, setSprites] = useState({
        ClassImages: {
            Wizard: 'https://piskel-imgstore-b.appspot.com/img/44e83b7a-f797-11e9-9d69-7b541452a7e8.gif',
            Warlock: 'https://piskel-imgstore-b.appspot.com/img/62f09600-f797-11e9-9db7-7b541452a7e8.gif',
            Barbarian: 'https://piskel-imgstore-b.appspot.com/img/7f846e21-f797-11e9-a2f2-7b541452a7e8.gif',
            Sorcerer: 'https://piskel-imgstore-b.appspot.com/img/9f2b7a7a-f797-11e9-9461-7b541452a7e8.gif',
            Druid: 'https://piskel-imgstore-b.appspot.com/img/b726d34c-f797-11e9-ac5d-7b541452a7e8.gif',
            Rogue: 'https://piskel-imgstore-b.appspot.com/img/c699b591-f797-11e9-ba53-7b541452a7e8.gif',
            Ranger: 'https://piskel-imgstore-b.appspot.com/img/db637e7a-f797-11e9-8d0d-7b541452a7e8.gif',
            Monk: 'https://piskel-imgstore-b.appspot.com/img/09817a66-f798-11e9-860d-7b541452a7e8.gif',
            Paladin: 'https://piskel-imgstore-b.appspot.com/img/17d55785-f798-11e9-af45-7b541452a7e8.gif',
            Cleric: 'https://piskel-imgstore-b.appspot.com/img/308a4085-f798-11e9-b12a-7b541452a7e8.gif',
            Fighter: 'https://piskel-imgstore-b.appspot.com/img/443d2375-f798-11e9-806c-7b541452a7e8.gif',
            Bard: 'https://piskel-imgstore-b.appspot.com/img/5f73c0e6-f798-11e9-8bcb-7b541452a7e8.gif',
        }  
    })
    // class, name, gender, race, class, background, alignment, strength, dexterity, intelligence, charisma, constitution, wisdom
        return (
                <div className="Character grey">
                        <h1 className="Character-title">{props.name || "Character Name"}</h1>
                        <div className="Character-data" style={{fontFamily: 'Grenze'}}>Race: {props.race}</div>
                        <div className="Character-data" style={{fontFamily: 'Grenze'}}>Class: {props.class}</div>
                        <div className="Character-data" style={{fontFamily: 'Grenze'}}>Alignment: {props.alignment}</div>

                    <div className="Character-image">
                        <img src={sprites.ClassImages[props.class]} alt="" />
                    </div>
                    <div style={{
                        fontFamily: 'Grenze'
                    }}>
                        <div className="Character-data">Stats:
                            <p>Strength: {props.strength}</p>
                            <p>Dexterity: {props.dexterity}</p>
                            <p>Intelligence: {props.intelligence}</p>
                            <p>Charisma: {props.charisma}</p>
                            <p>Consitution: {props.constitution}</p>
                            <p>Wisdom: {props.wisdom}</p>
                        </div>
                    </div>
                </div>
        );
}

export default Character;