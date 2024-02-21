import React, {useState} from "react"
import { addNewPlayer } from "../api";

const NewPlayerForm = ({setPlayers}) => {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [breed, setBreed] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!name || !breed || !imageUrl) {
            alert("Please fill out form!")
        }
        const newPlayer = await addNewPlayer(name, imageUrl, breed)
        console.log("new player", newPlayer)
        setPlayers((prevPlayer) => [newPlayer, ...prevPlayer])
        setName("");
        setBreed("")
        setImageUrl("")
        

    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add new Player</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) =>setName (event.target.value)}
          required
        />
        <label htmlFor="imageUrl">imageUrl:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl (event.target.value)}
          required
        />
        <label htmlFor="name">breed:</label>
        <input
          type="text"
          value={breed}
          onChange={(event) =>setBreed (event.target.value)}
          required
        />
        <button type="submit"> Add player</button>
      </form>
    );
}

export default NewPlayerForm;