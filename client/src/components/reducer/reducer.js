import { ADD_FAVORITE, DELETE_FAVORITE, FILTER,ORDER } from "./actionsType"


const initialState = {
    myFavorites: [],
    allCharaters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case ADD_FAVORITE:
        return { ...state, myFavorites: payload, };

        case DELETE_FAVORITE:
          return { ...state, myFavorites: payload , allCharacters: payload};
          
        case FILTER:
            const filtered = state.allCharaters.filter((character)=> character.gender === payload)
           
          return{
            ...state,
            myFavorites: filtered,
          

          }
        case ORDER:
          const order = [...state.allCharaters]
          order.sort((a,b) =>
          {
            if("A" === payload){
             return  a.id - b.id
            } else if("D"=== payload){
              return b.id - a.id
            }
            else{
              return 0;
            }

          })
          return{
            ...state,
            myFavorites: order
          }

      default:
        return { ...state };
    }
}

export default reducer