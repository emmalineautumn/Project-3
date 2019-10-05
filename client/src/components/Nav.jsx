import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from './Dropdown'

class NavBar extends Component {

    render() {
        return <>
            <div className='hide-on-med-and-down' style={{height: '2em'}}></div>
            <nav className="red darken-4" >
                <ul>
                    <li><NavLink to="/mycharacters">My Characters</NavLink></li>
                    <li><NavLink to="/mycampaigns">My Campaigns</NavLink></li>
                    <li><NavLink to="/mytables">My Tables</NavLink></li>
                    <Dropdown label="References">
                        <Dropdown label="Spells" destination="/spells" size="small">
                            <li><NavLink to="/spells/bybook">By Book</NavLink></li>
                            <li><NavLink to="/spells/byclass">By Class</NavLink></li>
                            <li><NavLink to="/spells/byschool">By School</NavLink></li>
                            <li><NavLink to="/homebrew/spells">Homebrew Spells</NavLink></li>
                        </Dropdown>
                        <Dropdown label="Classes" destination="/classes" size="small">
                            <li><NavLink to="/classes/bybook">By Book</NavLink></li>
                            <li><NavLink to="/homebrew/classes">Homebrew Classes</NavLink></li>
                        </Dropdown>
                        <Dropdown label="Races" destination="/races" size="small">
                            <li><NavLink to="/races/bybook">By Book</NavLink></li>
                            <li><NavLink to="/homebrew/races">Homebrew Races</NavLink></li>
                        </Dropdown>
                        <Dropdown label="Monsters" destination="/monsters" size="small">
                            <li><NavLink to="/monsters/bybook">By Book</NavLink></li>
                            <li><NavLink to="/homebrew/monsters">Homebrew Monsters</NavLink></li>
                        </Dropdown>
                    </Dropdown>
                </ul >
                <div className="center brand-logo">
                <NavLink to="/" className='valign-wrapper'>
                    <img src="/img/dragon_logo.png" alt="logo" style={{
                        height: '2em'
                    }} />
                </NavLink>
</div>
            </nav >
            </>
    }
}

export default NavBar;