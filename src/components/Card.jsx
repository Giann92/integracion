import s from "./styles/Card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "./reducer/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ id, name, species, image, gender, onClose });
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);
   return (
      <div className={s.Card}>
         <div className={s.btnContainer}>
            {isFav ? (
               <button id = 'btnFav'onClick={handleFavorite} className={s.btnFav }>❤️</button>
            ) : (
               <button id = 'btnFav'onClick={handleFavorite} className={s.btnFav}>🤍</button>
            )}


            {/* {isFav ? null: (
               <button onClick={onClose} className={`${s.btn} ${s.btnColor}`}>
                  X
               </button>
            )} */}

            <button onClick={onClose} className={`${s.btn} ${s.btnColor}`}>
               X
            </button>

         </div >
         <Link to={`/detail/${id}`} className={s.link}>
            <div >
               <div className={s.imgContainer}>
                  <img className={s.img} src={image} alt="Not Found" />
                  <h2 className={s.name}>{name}</h2>
               </div>
               <div className={s.propsContainer}>
                  <h2 className={s.species}>{species}</h2>
                  <h2 className={s.genders}>{gender}</h2>
               </div>
            </div>
         </Link>
      </div>
   );

}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);