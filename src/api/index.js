const COHORT = "2309-FTB_MT-WEB-PT";
const APIURL  = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        if (!response.ok) {
            throw new Error("Network response /Get players not ok")
        }
        const result = await response.json();
        if(result.error) {
            throw result.error;
        }
        return result.data. players;
    }catch (error) {
        console.error("There was an error/Get players")

    }
};


export const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}/${playerId}`);
      console.log("response fetchSinglePlayer --->", response);
      if (!response.ok) {
        throw new Error("Network response /GET single player not ok");
      }
      const result = await response.json();
      console.log("result fetchSinglePlayer --->", result);
      if (result.error) {
        throw result.error;
      }
      return result.data.player;
    } catch (error) {
      console.error(`There was an error /GET single player ${playerId}!`, error);
    }
  };
  
  export const addNewPlayer = async (name, breed, imageUrl) => {
    try {
      const response = await fetch(APIURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          breed,
          imageUrl,
        }),
      });
      console.log("response addNewPlayer --->", response);
      const result = await response.json();
      console.log("result addNewPlayer --->", result);
      return result.data.newPlayer;
    } catch (error) {
      console.error("There was an error /POST", error);
    }
  };
  
  export const removePlayer = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}/${playerId}`, {
        method: "DELETE",
      });
      console.log("removePlayer playerId ---> ", `${APIURL}/${playerId}`);
      if (!response.ok) {
        throw new Error("Network /DELETE error");
      }
    } catch (error) {
      console.error("There was an error /DELETE", error);
    }
  };
   