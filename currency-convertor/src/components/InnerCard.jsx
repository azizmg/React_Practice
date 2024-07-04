import React, { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
const InnerCard = ({ text,amount,options, onAmountChange,setVal }) => {
   
    return (
        <div className='inner-card'>
            <div className='d-flex  justify-content-between w-100 border h-25'>
                <span>{text}</span>
                <span>Current Type</span>
            </div>
            <div className='d-flex  justify-content-between w-100 border'>
           <input type="number" className='text-black border-0'       onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} value={amount} />
                <select
                    value={setVal}
                    onChange={(e) =>setVal(e.target.value)}
                    disabled={false}
                >
                    {options.map((currency) => (
                       
                        <option key={currency} value={currency}>
                            {currency}

                        </option>
                    ))}

                </select>
            </div>
        </div>
    )
}

export default InnerCard
