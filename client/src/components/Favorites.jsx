import { connect } from "react-redux";
import Card from "./Card";
import { orderCards, filterCards } from "./reducer/actions"
import { useDispatch } from "react-redux";

import s from "./styles/Favorite.module.css"


function Favorites({ myFavorites }) {

  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {

      case 'order':
        return dispatch(orderCards(value))
      case 'filter':
        return dispatch(filterCards(value))

      default:
        break;
    }
  }


  return (

    <div>

      <div className={s.selec}>

        <select name = 'order' onChange={handleClick}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select name = 'filter' onChange={(e)=> dispatch(filterCards(e.target.value))}>
          <option value=""> </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>

      </div>

      <div className={s.container}>

        {myFavorites?.map(({ id, name, species, image, gender }) => (
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
          />
        ))}
      </div>


    </div>




  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);