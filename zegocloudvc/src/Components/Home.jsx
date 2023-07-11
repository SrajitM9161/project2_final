import React,{useCallback,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const [value,setValue ] =useState();
    const navigate= useNavigate()
const handeljoinroom= useCallback( ()=>{
navigate(`/room/${value}`)
},[navigate,value])
  return (
    <div className='page'>
  <input value={value} onChange={(e) => setValue (e.target.value)} type="text" placeholder='Enter Room Code' />
  <button onClick={handeljoinroom}>Enter</button>
    </div>
  )
}

export default Home
