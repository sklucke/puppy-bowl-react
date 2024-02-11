import React from "react";
import PlayerCardItem from "./PlayerCardItem";

const AllPlayers = ({players}) => {
    return (
        <div>
            <h1>All Players</h1>
            {players.map((player) => {
                return <PlayerCardItem key={player.id} player={player} />;
            })}
        </div>
    );
};

export default AllPlayers;