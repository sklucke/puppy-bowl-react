import React, {useState, useEffect} from "react";
import {Routes,Route } from "react-router-dom";
import Allplayers from "./components/AllPlayers"
import NavBar from "./components/NavBar"
import { fetchAllPlayers } from "./api";

const App = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const getAllPlayers = async () => {
            const players = await fetchAllPlayers();
            setPlayers(players)

        }
        getAllPlayers()
    }, [])
    return(
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/players" element={<Allplayers players={players} />} />
            </Routes>
        </div>
    )
};

export default App;