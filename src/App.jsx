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
    <div className='bg-[url("/photo.png")]
     h-screen bg-cover flex flex-col items-center gap-4'>
    <h1 className='text-amber-50 text-center text-4xl '> Currency Convertor</h1>

   
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

<button className='text-amber-50 bg-red-900 text-center p-3 '
onClick={convertt}>Converts</button>


    </div>
  )

}

export default App
