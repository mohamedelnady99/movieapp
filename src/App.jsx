import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  axios  from 'axios';
import Home from './Home'

function App() {
  const [move,setmove] = useState([]);


  useEffect(()=>{
    async function getData() {
        let{data}=await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=3bc8d05ff5948d3b6d47ba28d756badb')
        console.log(data);
        setmove(data.results)
    }
    getData()
  },[])

  return (
    <>
      <Home move={move} />
    </>
  )
}

export default App
