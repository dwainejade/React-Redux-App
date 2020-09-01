import axios from "axios";

export const FETCHING_CHARACTER_START = 'FETCHING_CHARACTER_START';
export const FETCHING_CHARACTER_SUCCESS = "FETCHING_CHARACTER_SUCCESS";
export const FETCHING_CHARACTER_ERROR = "FETCHING_CHARACTER_ERROR";


const getMorty= () => {
    let morty = 1
    for(morty = 1; morty < 20; morty++){
    if(morty === 19){
        morty === 1
    }
    }
    return morty
}

export const getCharacter = () => (dispatch) => {
    dispatch({ type: FETCHING_CHARACTER_START });
    axios
        .get("https://rickandmortyapi.com/api/character/" + Math.floor(Math.random() * 19))
        .then((res) => {
            dispatch({ type: FETCHING_CHARACTER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FETCHING_CHARACTER_ERROR,
                payload: "Unable to fetch your Morty"
            });
        });
};
