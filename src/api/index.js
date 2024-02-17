const COHORT = "2309-FTB_MT-WEB-PT";
const APIURL  = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        if (!response.ok) {
            throw new Error("Network response /Get players not ok")
        }
        const result = await response.json();
        console.log("result", result);
    }catch (error) {
        console.error("There was an error/Get players")

    }
}

   