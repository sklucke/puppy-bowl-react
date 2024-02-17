import React from "react"
import "./PlayerCardItem.css";

const PlayerCardItem = ({player, isSinglePlayer}) => {
    const handleDelete = () => {}
    const handleSeeDetails = () => {
        
    }
    return(
        <div className="player-container">
            <img src={player.imageUrl} alt={player.name} />
            <div className="header-info">
                <h3 className="player-title">{player.name}</h3>
                <p className="player-number">{player.id}</p>
                <div>
                    <button className="delete-button">Delete</button>
                    <button className="detail-button">Details</button>

                </div>
            </div>

        </div>

    )
} 

export default PlayerCardItem;