import React, {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar"
import { fetchAllPlayers } from "./api";

const App =() => {
    const [players, setPlayers] =useState([])
    useEffect(() => {
        const getAllPlayers = async () => {
            const players = await fetchAllPlayers();
            setPlayers(players);

        }
        getAllPlayers()

    }, [])
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<AllPlayers></AllPlayers>} />
            </Routes>
            
        </div>
    );
};


export default App;