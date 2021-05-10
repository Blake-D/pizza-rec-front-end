import React from "react"

function Types(props){
    return(
        <div>
            <ul>
                {props.pizzaTypes.map(type => (
                    <li>
                        <button>{type}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Types