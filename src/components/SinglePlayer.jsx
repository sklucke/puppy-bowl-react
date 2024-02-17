import React, {useState, useEffect} from "react"
import { fetchSinglePlayer } from "../api";
import PlayerCardItem from "./PlayerCardItem";
import {useParams} from "react-router-dom"

const SinglePlayer = () => {
    const [ player, setPlayer] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const getSinglePlayer = async () => {
            const player = await fetchSinglePlayer(id)
            setPlayer(player);
        }
    }, [id])
    return (
        <div>
            <PlayerCardItem player={player} />
        </div>
    )
}
export default SinglePlayer;