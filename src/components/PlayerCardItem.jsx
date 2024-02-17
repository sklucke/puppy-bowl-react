import React from "react"
import { useNavigate } from "react-router-dom";
import "./PlayerCardItem.css";

const PlayerCardItem = ({player, isSinglePlayer}) => {
    const navigate = useNavigate();
    const handleDelete = () => {}
    const handleSeeDetails = () => {
        if (!isSinglePlayer) {
            navigate(`/players/${player.id}`)
        } else {
            navigate("/players");
        }

    }
    return(
        <div className="player-container">
            <img src={player.imageUrl} alt={player.name} />
            <div className="header-info">
                <h3 className="player-title">{player.name}</h3>
                <p className="player-number">{player.id}</p>
                <div>
                    <button className="delete-button">Delete</button>
                    <button onClick={handleSeeDetails} className="detail-button"> {!isSinglePlayer ? "See Details" : "Go Back"}</button>

                </div>
            </div>

        </div>

    )
} 

export default PlayerCardItem;