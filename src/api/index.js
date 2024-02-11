const COHORT = "2309-FTB_MT-WEB-PT";
const APIURL  = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        const result = await response.json();
        return result.data.players;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

export const fetchSingleplayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${playerId}`);
        if (!response.ok) {
            throw new Error("Network response /GET single player not ok");
        }
        const result = await response.json();
        return result.data;

    } catch (error) {
        console.error("There was an error /Get single player, error")
    }
}