import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDEN} from "./actionsType";


export const addFavorite = ( character) => {
    console.log(character)
    return {
        type: ADD_FAVORITE,
        payload: character,
    }
}

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}

export const filterCards = (gender) =>{
    return{
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (orden) =>{
    return{
        type: ORDEN,
        payload: orden,
    }
}