import React from 'react'
import Form from './Form'

export default function OptionsProfitCalculator() {
  return (
    <div>
        <p>Please Input a ticker</p>
        <form >
            <div>
                <label>Ticker</label>
                <input type='text'/>
                <button type="button">Get Price</button>
            </div>

            <button type="button">Get Options Table</button>
        </form>
    </div>
  )
}
