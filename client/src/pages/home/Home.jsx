import './home.css'
import {Picklist, Option} from 'react-rainbow-components'
import {useState} from 'react'
import {Chart, Dataset} from 'react-rainbow-components'
import axios from 'axios'
import { dataContext } from '../../context/Context'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-rainbow-components'


export default function Home(){
    const datas = { value: {name: '', label: ''} };
    const [kraje, setKraje] = useState([])
    const [genre, setGenre] = useState([])
    const [state, setState] = useState(datas);
    const [wyniki, setWyniki] = useState([])
    //use state to check if data is loaded
    const [isLoaded, setIsLoaded] = useState(false)
   

   //crate array of colors
    const colors = ['#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9900FF', '#FF00FF','#74a22f', '#39cead', 'a89f15','#7d0d28']

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/api/countries");
            //get only countryName
            const countries = res.data.map((country) => {    
                return {name: country.countryName, id: country.id, updateData: country.updateData}
            })  
            console.log(countries);
            setKraje(countries)
            
          } catch (error) {
            // Handle any error occurred during the API request
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);

        //get value from state
    const getValue = () => {
        console.log(state.value.name)
        return state.value.name
    }
    console.log(getValue())

    useEffect(() => {
        if(getValue() !== ''){
            const fetchData = async () => {
                try {
                    setWyniki([])
                    const res = await axios.get(`/api/users/getData/${getValue()}`);
                    setWyniki(res.data)
                    
                } catch (error) {
                    // Handle any error occurred during the API request
                    console.error("Error fetching data:", error);
                }
            };
            fetchData()
        }
        
    }, [getValue()]); 
    console.log(wyniki)

    


    function updateDate() {
        const selectedCountry = kraje.find((kraj) => kraj.name === getValue());
        if (selectedCountry) {
          return <p>Ostatnia aktualizacja danych: {selectedCountry.updateData}</p>;
        }
        return null;
      }

      //pobranie danych z wyników
      const wynikiArray = Object.keys(wyniki).map((genre) => ({
        genre,
        value: wyniki[genre],
      }));

      //gnerownie wykresu
      function renderChart() {
        if (wynikiArray.length > 0) {
          const labels = wynikiArray.map((wynik) => wynik.genre);
          const values = wynikiArray.map((wynik) => wynik.value);
          const backgroundColors = colors.slice(0, (wynikiArray.length+1));
          
          return (
            <Chart labels={labels} type="pie" legendPosition="bottom">
              <Dataset title="Data" values={values} backgroundColor={backgroundColors} borderColor="#000000" />
            </Chart>
          );
        }
        
        return <Spinner size="large" variant="brand" />;
      }

    return(
        <div className="home">
            <h1 className="title">
                Wybierz kraj
            </h1>
            <div className="picklist">
                <Picklist
                    id="picklist-1"
                    label="Picklist Label"
                    // save to datas
                    // save to variable
                    value={state.value}
                    onChange={(value) => setState({ value })}
                    className="picklist">
                    {kraje.map((kraj) => {
                        return <Option key={kraj.id} name={kraj.name} label={kraj.name} />
                    })}
                </Picklist>
            </div>
            <div className = "date">
                    {updateDate()}
            </div>
            <div className="chart">
                {renderChart()}
                </div>
        </div>



    )
}