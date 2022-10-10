import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// import the css here
import './Main.css';

// all pages should be put inside the page directory
// all elements that can be re-used, i.e, a player card should be put in the elements directory

// add all your components here
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';
import Lobby from './Lobby';
import Editor from './Editor';
import Quiz from './Quiz';

import logoImg from '.././images/Logo.png';

// socket.io is for the websocket connection implementation
// i've commented these for now so that your side doesn't error out if the server is running or not
const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000', {
  withCredentials: true
});

function Main() {

    const [roomID, setRoomID] = useState(null);

    const [inputID, setInputID] = useState('');
    const [userName, setUserName] = useState('');

    // i made this one for testing purposes, don't mind
    // const [mode, setMode] = useState('create');

    // test data
    var sessionData = {"timer": 10, "questions": ["What is 1+1?", "How stupid am I?", "What the Fuck?"], "choices": [["2", "11", "idk", "none of the above"], ["Yes", "No", "Maybe", "A Little"], ["Indeed", "I know right", "Fuck you too", "True"]], "answers": ["2", "Yes", "I know right"]}
    localStorage.setItem('sessionData', JSON.stringify(sessionData))

    // this state hook is for receiving all player data inside the room from the server
    const [playersList, setPlayersList] = useState([]);

    const navigate = useNavigate()

    socket.on('connect', () => {
        console.log('connected to server!');
    })
      
    socket.on('UID', (id) => {
        setRoomID(id)
    })

    socket.on('userData', (data) => {
        setPlayersList(data);
    })
    
    // these handle the joining and creating rooms, i'll change them eventually as needed
    // commented out because socket is defined if server is running
    // don't edit please

    function join(name, id) {
        setUserName(name);
        setInputID(id);
        
        if (id !== undefined) {
            if (id !== '') {
                console.log('joining lobby...')
                socket.emit('join', {'name': name, 'id': id, 'role': "player"})
                setRoomID(id)
            }
        } else {
            if (name !== '') {
                console.log('creating lobby...')
                socket.emit('create', {'name': name, 'role': "host"})
            }
        }

        navigate('/lobby')
    }

    function submitAnswer(score) {
        socket.emit('answered', {'id': inputID, 'score': score})
    }

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

        <Routes>
            <Route exact path='/' element={<Lobby toLobby={(name, id) => join(name, id)} />} />
            <Route exact path='/lobby' element={<JoinLobby players={playersList} code={roomID} />} />
            <Route exact path='/editor' element={<Editor />} />
            <Route exact path='/quiz' element={<Quiz submitAnswer={(score) => submitAnswer(score)} />} />
        </Routes>


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