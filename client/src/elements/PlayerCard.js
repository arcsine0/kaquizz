import './PlayerCard.css'

import defaultUserImg from '../images/profile-user.svg'

export default function PlayerCard(props) {
    var name = props.name

    return (
        <div className='playerCard'>
            <div className='playerInfo'>
                <h4 className="playerName">Player 1</h4>
                <p><span className="currentPlayer">You</span></p>
            </div>
            <img src={defaultUserImg} className='userImg'></img>
        </div>
    )
}