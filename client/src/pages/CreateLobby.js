import React, { useState } from 'react';

// import css here
import './Main.css'

import logoImg from '../images/Logo.png'
import { PlacementTable } from '../elements/PlacementTable';

export default function CreateLobby({saveName}) {
    // state hooks 
    const [userName, setUserName] = useState('')

    return (
        <div className='createLobby'>
            <div className='header'>
                <div className='exitButton'>
                    <i class="ri-logout-box-line large-icon white-icon" onClick={() => { navigate('/') }}></i>
                </div>
                <div className='quizTitleContainer'>
                    <input type="text" id="quizTitle" name="quizTitle" placeholder="Quiz Title"></input>
                </div>
                <div className='proceed'>
                    <h3>Proceed</h3>
                    <i class="ri-arrow-right-line large-icon"></i>
                </div>
            </div>
           
        </div>

        // i used this for testing
        // don't bother with creating the onClick function is the task is for UI
        // i'll just add the click functions for buttons and such when the UI is done

        // <form>
        //     <div class="mb-3">
        //         <label for="userName" class="form-label">Enter your name</label>
        //         <input type="text" class="form-control" id="userName" aria-describedby="userName" onChange={(event) => setUserName(event.target.value)}  />
        //     </div>
        //     <button type="button" class="btn btn-primary" onClick={() => saveName(userName)}>Create</button>
        // </form> 
    )
}