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
                        <li>
                            <a href="/spells" className="dropdown-trigger" data-target="spellDropdown">Spells</a>
                        </li>
                        <li>
                            <a href="/classes" className="dropdown-trigger" data-target="spellDropdown">Classes</a>
                        </li>
                        <li>
                            <a href="/races" className="dropdown-trigger" data-target="spellDropdown">Races</a>
                        </li>
                        <li>
                            <a href="/monsters" className="dropdown-trigger" data-target="spellDropdown">Monsters</a>
                        </li>
                    </Dropdown>
                    {/* <li className="dropdown-trigger" data-target="referencesDropdown">References
                        <div>
                            <ul className="dropdown-content" id="referencesDropdown">
                                <li>
                                    <a href="/spells" className="dropdown-trigger" data-target="spellDropdown">
                                        <ul id="spellDropdown" className="dropdown-content">
                                            <li><a href="/spells/book">By Book</a></li>
                                            <li><a href="/spells/school">By School</a></li>
                                            <li><a href="/spells/class">By Class</a></li>
                                            <li><a href="/homebrew/spells">Homebrew Spells</a></li>
                                        </ul>
                                    </a>
                                </li>
                                <li>
                                    <a href="/races">
                                        <ul>
                                            <li><a href="/races">By Book</a></li>
                                            <li><a href="/homebrew/races">Homebrew Races</a></li>
                                            <li><a href=""></a></li>
                                        </ul>
                                    </a>
                                </li>
                                <li>
                                    <a href="/classes">
                                        <ul>
                                            <li><a href="/classes/book">By Book</a></li>
                                            <li><a href="/homebrew/classes">Homebrew Classes</a></li>
                                            <li><a href=""></a></li>
                                        </ul>
                                    </a>
                                </li>
                                <li>
                                    <a href="/monsters">
                                        <ul>
                                            <li><a href="/monsters/book">By Book</a></li>
                                            <li><a href="/homebrew/monsters">Homebrew Monsters</a></li>
                                            <li><a href=""></a></li>
                                        </ul>
                                    </a>
                                </li>
                            </ul> */}
                    {/* </div>
                    </li> */}
                </ul >
            </nav >
            </>
    }
}

export default NavBar;