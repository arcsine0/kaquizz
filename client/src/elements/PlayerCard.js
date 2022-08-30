import './PlayerCard.css'

export default function PlayerCard(props) {
    var name = props.name

    return (
        <div className='player shadow-sm'>
            <div className='container'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}