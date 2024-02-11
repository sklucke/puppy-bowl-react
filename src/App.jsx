import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import { fetchAllPlayers } from "./api"
import SinglePlayer from "./components/SinglePlayer"
const App = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        const getAllPlayers = async () => {
            const player = await fetchAllPlayers();
            setPlayers(player);

        }
        getAllPlayers()

    }, [])
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<hl>home</hl>}/>
                <Route path="/players" element={<AllPlayers players={players} />}/>
                <Route path="/players:id" element={<SinglePlayer />} />
            </Routes>
        </div>
            
        
    )
};

export default App;