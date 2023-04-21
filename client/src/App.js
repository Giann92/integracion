import { useEffect, useState, } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import axios from 'axios';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  async function login(userData) {
    
    try {
      const { userName, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${userName}&password=${password}`)

      const { access } = data;
      setAccess(data);
      access && navigate('/home');

    } catch (error) {
      console.log(error.message);
    }



  }
  const logOut = ()=>{
    access && setAccess(false);
    navigate('/')
  }

  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);


  const onSearch = async (id) => {
    try {

      let { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      const char = characters.find((char) => char.id === id);
      if (id) {
        if (char) return alert("Personaje ya existe");
        setCharacters([...characters, data]);
      }
    } catch (error) {
      console.log(error.message)
    }
  }


  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id))
    setCharacters(filtered)
  }


  return (
    <div className='App' style={{ padding: '25px' }}>

      {
        location.pathname !== '/' &&
        <Nav onSearch={onSearch} logOut={logOut}/>
      }
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={< Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>


    </div>
  )
}

export default App
