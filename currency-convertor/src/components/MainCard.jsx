import React, { useState } from 'react'
import InnerCard from './InnerCard'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
const MainCard = () => {
  const [from, setFrom] = useState("USD") 
  const [to, setTo] = useState("PKR")
  const currencyData = useCurrencyInfo(from)
  const [amount,setAmount]=useState(0)
  let currency = []
  let price=''
  if (currencyData.conversion_rates) {

      let conversion = currencyData.conversion_rates
     
        // console.log('tyyu',conversion)
        Object.entries(conversion).map(ele=>{
// console.log('ele',ele[0]+''ele)
        })
       
     
      currency = Object.keys(conversion)
      price = Object.values(conversion)
      console.log('oii',price)
  }
  return (
    <div className='card'>
      <div className="card_1">
      <InnerCard 
      text="From"
      setVal={from}
      setValChange={(from)=>setFrom(from)}
      options={currency}
      amount={amount}
      onAmountChange={(amount)=>setAmount(amount)}
      />
      </div>
      <div className='swap-btn'>
        <button>swap</button>
      </div>
      <div className="card_2">
      <InnerCard   text="To"
      setVal={to}
      setValChange={(to)=>setFrom(to)}
      options={currency}
      amount={amount}
      onAmountChange={(amount)=>setAmount(amount)}
      />
      
      </div>
      <div className='convert-btn'>
        <button><h3>Convert USD To INR </h3></button>
      </div>
    </div>
  )
}

export default MainCard

