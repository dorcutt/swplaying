import React from 'react';
import logo from './logo.svg';

function AppHeader(){
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Star Wars DB
                </p>
            </header>
            <ul className="header">
                <li><a name="home">Home</a></li>
                <li><a name="people">People</a></li>
                <li><a name="planets">Planets</a></li>
                <li><a name="starships">Starships</a></li>
            </ul>
        </div>
    )
}

export default AppHeader