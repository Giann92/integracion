import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsType";
const endpoint = 'http://localhost:3001/rickandmorty/fav';


// export const addFavorite = ( character) => {
//     console.log(character)
//     return {
//         type: ADD_FAVORITE,
//         payload: character,
//     }
// }
export const addFavorite = (character) => {

   return async (dispatch) => {
      try{
         const response = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAVORITE,
            payload: response.data,
         });
      }catch(error){
         console.log(error.message);
      }

   }
}

// export const deleteFavorite = (id) => {
//     return {
//         type: DELETE_FAVORITE,
//         payload: id,
//     }
// }
export const deleteFavorite = (id) => {
   return async (dispatch) => {
      try{
         const response = await axios.delete(`${endpoint}/${id}`)
         return dispatch({
            type: DELETE_FAVORITE,
            payload: response.data,
         });
      }catch(error){
        console.log(error.message);
      }
     
      }
   }

export const filterCards = (gender) => {
   return {
      type: FILTER,
      payload: gender,
   }
}

export const orderCards = (order) => {
   return {
      type: ORDER,
      payload: order,
   }
}