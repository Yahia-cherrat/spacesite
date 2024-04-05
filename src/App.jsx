import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [showDescription, setShortDescription] = useState(false);
  
  function handleToggleDescription(){
    setShortDescription(!showDescription);
  }
  
  useEffect(() => {
    async function fetchData(){
      const API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
        console.log('data\n', apiData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      {data ? (<Main data={data}/>) : 
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>}
      {showDescription && (<SideBar data={data}/>)}
      {data && (<Footer data={data} handleToggleDescription={ handleToggleDescription }/>)}
    </>
  )
}

export default App
