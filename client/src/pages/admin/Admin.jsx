import axios from 'axios'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './admin.css'
import { userContext } from '../../context/Context'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Picklist, Option } from 'react-rainbow-components'
import { dataContext } from '../../context/Context'

export default function Admin() {
    const datas = { value: { name: '', label: '' } };
    const [kraje, setKraje] = useState([])
    const [genre, setGenre] = useState([])
    const [state, setState] = useState(datas);
    const [wyniki, setWyniki] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isCountryDeleted, setIsCountryDeleted] = useState(false);
    const [isCountryAdded, setIsCountryAdded] = useState(false);


    const fetchData = async () => {
      try {
        const res = await axios.get("/api/countries");
        const countries = res.data.map((country) => {
          return { name: country.countryName, id: country.id, updateData: country.updateData }
        });
        console.log(countries);
        setKraje(countries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const getValue = () => {
      console.log(state.value.name);
      return state.value.name;
    };
  
    useEffect(() => {
      if (isCountryDeleted) {
        fetchData();
        setIsCountryDeleted(false);
      }
    }, [isCountryDeleted]);

    useEffect(() => {
        if (isCountryAdded) {
          fetchData();
          setIsCountryAdded(false);
        }
      }, [isCountryAdded]);
      
  
    function update() {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          if (getValue() !== '') {
            const res = await axios.get(`/admin/update/${getValue()}`);
          }
          setIsLoading(false);
        } catch (error) {
          console.error("Error:", error);
          setIsLoading(false);
        }
      }, 4000); // 4 sekundy
    }
  
    function deleteCountry() {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          if (getValue() !== '') {
            const res = await axios.delete(`/api/countries/${getValue()}`);
            setIsCountryDeleted(true);
          }
          setIsLoading(false);
        } catch (error) {
          console.error("Error:", error);
          setIsLoading(false);
        }
      }, 3000); // 3 sekundy
    }
    function deleteAllCountries() {
        setIsLoading(true);
        setTimeout(async () => {
          try {
            if (getValue() !== '') {
              const res = await axios.delete(`/api/countries`);
              setIsCountryDeleted(true);
            }
            setIsLoading(false);
          } catch (error) {
            console.error("Error:", error);
            setIsLoading(false);
          }
        }, 3000); // 3 sekundy
      }
  const countryRef = useRef();
  const playlistRef = useRef();
  const { dispatch, isFetching } = useContext(userContext);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    axios.post("/api/countries", {
      countryName: countryRef.current.value,
      countryID: playlistRef.current.value
    });
  
    const value = countryRef.current.value; // Pobierz wartość kraju
  
    // Wywołaj funkcję update, jeśli wartość nie jest pusta
    setIsLoading(true);
    setTimeout(async () => {
      try {
        if (value !== '') {
          const res = await axios.get(`/admin/update/${value}`);
          setIsCountryAdded(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    }, 4000); // 4 sekundy
  }
  
  console.log(kraje)

  return (
    <div className="home">
      <h1 className="title">
        Admin
      </h1>
      <div className="picklist">
        <h2 className='update'>
          Dostępne kraje
        </h2>
        <Picklist
          id="picklist-1"
          value={state.value}
          onChange={(value) => setState({ value })}
          className="picklist">
          {kraje.map((kraj) => {
            return <Option key={kraj.id} name={kraj.name} label={kraj.name} />
          })}
        </Picklist>
        <h5>
          Wybierz działanie
        </h5>
    
        <div className="button-container">
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <button onClick={update}>Aktualizuj</button>
          )}
        
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <button onClick={deleteCountry}>Usuń</button>
          )}
            {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <button onClick={deleteAllCountries}>Usuń wszystkie kraje</button>
          )}
        </div>
        <h2 className='update'>
          Dodaj kraj
        </h2>
        <form className="dodajKraj" onSubmit={handleSubmit}>
        <div className="form-container">
          <label>Nazwa kraju</label>
          <input type="text" className="loginInput" placeholder="Wpisz kraj" ref={countryRef} />
          <label>ID playlisty</label>
          <input type="text" className="loginInput" placeholder="Wpisz ID playlisty" ref={playlistRef} />
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
          <button className="addButton" type="submit" >Dodaj</button>
          )}
          </div>
          </form>
      </div>
    </div>
  )
}
