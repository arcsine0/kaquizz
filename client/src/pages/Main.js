import React, { useState } from 'react';

// import the css here
import './Main.css';

// all pages should be put inside the page directory
// all elements that can be re-used, i.e, a player card should be put in the elements directory

// add all your components here
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';
import Lobby from './Lobby';

// socket.io is for the websocket connection implementation
// i've commented these for now so that your side doesn't error out if the server is running or not
// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:4000', {
//   withCredentials: true
// });

function Main() {
    // these are all the useState hooks / react variables that can be changed at any time using their respective set callbacks
    // i.e to set username, setUserName(value) 

    // don't touch this roomID one, the value is set from the server randomly per session
    const [roomID, setRoomID] = useState(null);

    // you can either use these or make new state hooks to set and test your react components
    // to make a new state hook do:
    // const [name, set callback] = useState(default value or null)
    const [inputID, setInputID] = useState('');
    const [userName, setUserName] = useState('');

    // i made this one for testing purposes, don't mind
    // const [mode, setMode] = useState('create');

    // this state hook is for receiving all player data inside the room from the server
    const [playersList, setPlayersList] = useState([]);

    // these are all for socket / user connections to the server
    // commented out because socket is defined if server is running
    // don't edit please
    // socket.on('connect', () => {
    //     console.log('connected to server!');
    // })
      
    // socket.on('UID', (id) => {
    //   setRoomID(id)
    // })

    // socket.on('userData', (data) => {
    //     setPlayersList(data);
    // })
    
    // they handle the joining and creating rooms, i'll change them eventually as needed
    // commented out because socket is defined if server is running
    // don't edit please
    // function join(name, id) {
    //     setUserName(name);
    //     setInputID(id);
    //     if (inputID !== '') {
    //         socket.emit('join', {'name': userName, 'id': inputID})
    //     }
    // }

    // function create(name) {
    //     setUserName(name);
    //     if (userName !== '') {
    //         socket.emit('create', userName)
    //     }
    // }

    // i used these for testing purposes
    // function Mode(props) {
    //     const selectedMode = props.selectedMode
    //     if (selectedMode === 'create') {
    //         return (
    //             <CreateLobby saveName={(name) => create(name)}/>
    //         )
    //     } else {
    //         return (
    //             <JoinLobby submitID={(name, id) => join(name, id)}/>
    //         )
    //     }
    // }

    // function LobbyUI() {
    //     if (playersList.length !== 0) {
    //         return (
    //             <Lobby playerList={playersList}/>
    //         )
    //     } else {
    //         return (
    //             <h3>No lobby created yet...</h3>
    //         )
    //     }
    // }

    return (
        // put your html code inside this div
        <div className=''>
            {/* add your layout here */}
        </div>

        // i used these for testing purposes as well
        // <div className='container shadow rounded p-4'>
        //     <h1>kaquizz</h1>
        //     <h1><strong>{roomID}</strong></h1>
        //     <button type="button" class="btn btn-primary m-1" onClick={() => setMode('create')}>Create Lobby</button>
        //     <button type="button" class="btn btn-primary m-1" onClick={() => setMode('join')}>Join Lobby</button>

        //     <Mode selectedMode={mode}/>
        //     <LobbyUI />
            
        // </div>

    )
}

// exports to index.js
export default Main;