import React, { Component } from 'react';
import Dropdown from './Dropdown'

class NavBar extends Component {

    render() {
        return <>
            <div className='hide-on-med-and-down' style={{height: '2em'}}></div>
            <nav className="red darken-4" >
                <ul>
                    <li><a href="/mycharacters">My Characters</a></li>
                    <li><a href="/mycampaigns">My Campaigns</a></li>
                    <li><a href="/mytables">My Tables</a></li>
                    <Dropdown label="References">
                        <Dropdown label="Spells" destination="/spells" size="small">
                            <li><a href="/spells/bybook">By Book</a></li>
                            <li><a href="/spells/byclass">By Class</a></li>
                            <li><a href="/spells/byschool">By School</a></li>
                            <li><a href="/homebrew/spells">Homebrew Spells</a></li>
                        </Dropdown>
                        <Dropdown label="Classes" destination="/classes" size="small">
                            <li><a href="/classes/bybook">By Book</a></li>
                            <li><a href="/homebrew/classes">Homebrew Classes</a></li>
                        </Dropdown>
                        <Dropdown label="Races" destination="/races" size="small">
                            <li><a href="/races/bybook">By Book</a></li>
                            <li><a href="/homebrew/races">Homebrew Races</a></li>
                        </Dropdown>
                        <Dropdown label="Monsters" destination="/monsters" size="small">
                            <li><a href="/monsters/bybook">By Book</a></li>
                            <li><a href="/homebrew/monsters">Homebrew Monsters</a></li>
                        </Dropdown>
                    </Dropdown>
                </ul >
                <div className="center brand-logo">
                <a href="/" className='valign-wrapper'>
                    <span>Dragonslayer</span>
                    <img src="/img/dragon_logo.png" alt="logo" style={{
                        height: '2em',
                        width: '2em'
                    }} />
                </a>
</div>
            </nav >
            </>
    }
}

export default NavBar;