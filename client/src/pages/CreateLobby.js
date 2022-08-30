import React, { useState } from 'react';

// you can also import individual css files here
// import './filename.css'

export default function CreateLobby({saveName}) {
    // state hooks 
    const [userName, setUserName] = useState('')

    return (
        <div className=''>
            {/* add your layout here */}
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