// basically this custom hook(function) we are using to get the specific data from api 
// and in this hook we will pass a argument currency

import { useEffect, useState  } from 'react'
import './App.css'

function Usecurrency(currency){
    const [data,setdata]=useState({}) //{} this is for empty object
    useEffect(()=>{
         async function api(currency) {
            const re=  await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const ree= await re.json()  // converting json to js object

            
            setdata(ree[currency]) // setting the object
           // console.log(data)  
        }
        api(currency)
    
    },[currency])
    

    return data;
}


export default Usecurrency