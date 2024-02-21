import React from "react"
import { useNavigate } from "react-router-dom";
import "./PlayerCardItem.css";
import { removePlayer } from "../api";

const PlayerCardItem = ({player, isSinglePlayer, setPlayers }) => {
    const navigate = useNavigate();
    const handleDelete = async () => {
        await removePlayer(player.id);
        setPlayers((prevState) => {
            return prevState.filter((play) => play.id !== player.id);
        })

    }
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
                <div>
                    <button onClick={handleDelete} className="delete-button">Delete</button>
                    <button onClick={handleSeeDetails} className="detail-button"> {!isSinglePlayer ? "See Details" : "Go Back"}</button>

                </div>
                <p className="player-number">{player.id}</p>
                
            </div>

        </div>

    )
} 

export default PlayerCardItem;