import Card from './Card';
import s from './styles/Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return(
   <div className= {s.container}>
      {
         characters.map(({id ,name, species, gender , image}) =>{
            return (
               <Card
                  id= {id}
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => props.onClose(id)} />
            );
         })
      }
   </div>);
}
