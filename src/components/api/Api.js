import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Challenge from '../challenge/challenge'

const useEffectHook = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect(()=>{
      const fetchItems = async () => {
    
        //https://api.binance.us/api/v3/ticker/24hr
        const result = await axios(`https://api.binance.us/api/v3/ticker/24hr`)
    
        //console.log( result.data)
        setItems(result.data)
        setIsLoading(false)
    
      }
      fetchItems()
    }, [])



    return (
        
            <Challenge isLoading={isLoading} items={items}/>
      
    );
}

export default useEffectHook;
