import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './challenge.css'
import BTC from '../../assets/BTC_pic.png'
import face from '../../assets/bitboy_crypto_face.png'
import {
    FaBitcoin
} from "react-icons/fa";
import NumberFormat from 'react-number-format';

function Challenge() {


    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchItems = async () => {


            const result = await axios(`https://api.binance.us/api/v3/ticker/24hr`)


            setItems(result.data)
            setIsLoading(false)

        }
        fetchItems()
    }, [])

    // let price = items[0].lastPrice;


    return (

        isLoading ? (<h1>Loading...</h1>) : (
            <div className='position__container'>
                <div className='position__header'>
                    <img className="position__header-img" src={face} alt="" />

                </div>

                <h2 className='position__header' >
                    $1K to $10K 
                  <b>  Challenge</b>
                </h2>



                <div className="position" >

                    <span className="position__pic-container">
                        < FaBitcoin className='position__icon' />
                        {/* <img className="position__pic" src={BTC} alt="" /> */}
                        <span className="position__title"> {items[0].symbol}</span>
                        <span className="position__price"> {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(items[0].lastPrice)}</span>
                    </span>


                </div>
            </div>

        )
    )
}

export default Challenge;
