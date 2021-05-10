import React from "react"

function Prices(props){
    return(
        <div>
            <ul>
                {props.priceRanges.map(price => (
                    <li>
                        <button>{price}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Prices