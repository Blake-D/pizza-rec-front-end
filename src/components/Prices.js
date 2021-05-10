import React from "react"

function Prices(props){
    return(
        <div>
            <ul>
                {props.priceRanges.map(price => (
                    <li>{price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Prices