import './App.css'
import Usecurrency from './currency_hook'
import Inputbox from './inputcomponent'
import { useState,useEffect } from 'react'

function App() {

  const[amount,setamount]=useState('')
  const[currency,setcurrency]=useState('inr')
  const currencyhook=Usecurrency(currency)
  const currencylist=Object.keys(currencyhook)
  const[tocurrency,settocurrency]=useState('usd')
  const[convert,toconvert]=useState('')
  const convertt=()=>toconvert(amount* (currencyhook[tocurrency]))
  console.log(currencylist)
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1690983320828-c01b88baacb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen'>
    <h1 className='text-amber-50 text-center text-4xl mx-150'> Currency Convertor</h1>
    <br>
    </br>
   
    <Inputbox name={'From'} amount={amount}
  setamount={setamount}
  currency={currency}
  setcurrency={setcurrency}
  currencylist={currencylist}/>

 <Inputbox name={'To'}
 amount={convert}
 currency={tocurrency}
setcurrency={settocurrency}
currencylist={currencylist}/>


<button className='text-amber-50 bg-red-900 text-center mx-180 p-3 '
onClick={convertt}>Converts</button>


    </div>
  )

}

export default App
