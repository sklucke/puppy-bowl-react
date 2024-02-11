import React, {useState, useEffect} from "react"
import {fetchSinglePlayer} from "../api";
import PlayerCardItem from "./PlayerCardItem"

const SinglePlayer = () => {
    const[player, setPlayer] = useState(null);
    useEffect(() => {
        const getSinglePlayer = async () => {
            const player = await fetchSinglePlayer(id);
            setPlayer(player);
        }

    }, [id]);
    return(
        <div>SinglePlayer</div>
    )

}

export default SinglePlayer