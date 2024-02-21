import React from "react";
import PlayerCardItem from "./PlayerCardItem";
import NewPlayerForm from "./NewPlayerForm";

const AllPlayers = ({players, setPlayers}) => {
    return(
        <div>
            <h1>All Players</h1>
            <NewPlayerForm  setPlayers={setPlayers}/>
            {players.map((player) => {
                return <PlayerCardItem key={player.id} player={player} setPlayers={setPlayers} />
            })}
        </div>
    )
}

export default AllPlayers;