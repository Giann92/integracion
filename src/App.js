import { useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/nav/Nav';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App () {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "gian@henry.com";
  const PASSWORD = "1234.Hola";

  const onSearch = (id) =>{
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then((res)=> res.json())
   .then((data)=>{
    (data.name ? characters.filter((chart)=> chart.id === data.id).length === 0 : "") ? setCharacters([...characters, data]):
    alert("ID no encontrado o repetido.");
   })
   .catch((error)=> console.log(error));
  }

  const onClose = (id)=>{
    const filtered = characters.filter((char)=>char.id !== id)
    setCharacters(filtered)
  }
  
  function login(userData) {
    if (userData.password === PASSWORD && userData.userName === EMAIL) {
      console.log("entro")
       setAccess(true);
       navigate('/home');
    }
 }
  useEffect(()=>{
   !access && navigate("/")
  }, [access, navigate])

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      {
        location.pathname !== '/' &&
      <Nav onSearch={onSearch}/>
      }
      <Routes>
      <Route path='/' element={<Form login= {login}/>}/>
      <Route path='/home' element= {< Cards characters={characters} onClose= {onClose} />} />
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
        
      
    </div>
  )
}

export default App
