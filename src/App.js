import DisplayQuotes from "./components/DisplaySimps";
import react, { useState } from 'react'
import axios from 'axios'
import DisplaySimps from './components/DisplaySimps'

function App() {
  const [quoteSimp, setQuoteSimp]= useState([])

  const getQuoteSimp = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setQuoteSimp(data[0]);
      })
  }

  return (
    <div className="App">
      <DisplaySimps quoteSimp={quoteSimp}/>
      <button type="button" onClick={getQuoteSimp}>Quote Simpsoms</button>
    </div>
  );
}

export default App;
