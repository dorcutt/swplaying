import React from "react"

function Character(props) {
    return (
        <div>
            <p>{props.character.name} Height:{props.character.height}cm</p>
        </div>
    )
}

export default Character