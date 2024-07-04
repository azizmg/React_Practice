import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/091722aa45f811413923e424/latest/${currency}`)
        .then((res) =>{
        return res.json()
        }).then(dt=>setData(dt))
        .catch((error)=>{
        console.log('error',error)
    })
        // console.log('dtt',data);
    }, [currency])
    return data
}

export default useCurrencyInfo;