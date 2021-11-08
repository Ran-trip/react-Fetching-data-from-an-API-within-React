import React from 'react'

function DisplaySimps({quoteSimp}) {
    return (
        quoteSimp && (
        <div className="DisplayQuote">
            <img src={quoteSimp.image}/>
            <ul>
                <li>
                    {quoteSimp.character}
                </li>
                <li>
                    {quoteSimp.quote}
                </li>
            </ul>
            
        </div>
        )
    )
}

export default DisplaySimps;
