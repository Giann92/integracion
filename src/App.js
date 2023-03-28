import { useState,  useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/nav/Nav';
import { Routes, Route, useLocation,useNavigate  } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "";
  const PASSWORD = "";

  const onSearch = (id) =>{
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then((res)=> res.json())
   .then((data)=>{
    (data.name ? 
    characters.filter((chart)=> chart.id === data.id).length === 0 : "") ? 
     setCharacters([...characters, data]):
    alert("ID no encontrado o repetido.");
   })
   .catch((error)=> console.log(error));
  }

  const onClose = (id)=>{
    const filtered = characters.filter((char)=>char.id !== id)
    setCharacters(filtered)
  }
  
   function login(userData) {
//     if (userData.password === PASSWORD && userData.userName === EMAIL) {
//        setAccess(true);
//        navigate('/home');
//     }
     setAccess(true);
     navigate('/home');
  }



  // useEffect(()=>{
  //  !access && navigate("/")
  // }, [access, navigate])

  return (
    <div className='App' style={{padding: '25px' }}>
      
      {
        location.pathname !== '/' &&
      <Nav onSearch={onSearch}/>
      }
      <Routes>
      <Route path='/' element={<Form login= {login}/>}/>
      <Route path='/home' element= {< Cards characters={characters} onClose= {onClose} />} />
      <Route path='/about' element={<About/>} />
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
        
      
    </div>
  )
}

export default App
