import react from "react";
import "./PlayerCardItem.css"

const PlayerCardItem = ({ player }) => {
    return (
        <div className="card-container">
            <img src={player.imageUrl} alt={player.name} />
            <div className="card-content">
                <h3 className="card-title">{player.name}</h3>
                <p>{player.breed}</p>
                <div className="card-buttons">
                    <button className="delete-button">Delete</button>
                    <button className="details-button">See Details</button>
                </div>
            </div>
        </div>

    )
}

export default PlayerCardItem;