import React from "react"
import Starship from "./Starship"

class Starships extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
            starships: null 
        }
    }
    componentDidMount() {
        fetch("https://swapi.co/api/starships")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loaded: true,
                    starships: data.results
                })
            })
    }
    render () {
        let dataToRender = "";
        if (this.state.loaded) {
            dataToRender = this.state.starships.map(data => <Starship key={data.name} starship={data}/>)
        }
        return (
            <div>
                <p>This is where you get to learn great stuff about Star Wars Planets</p>
                {dataToRender}
            </div>
        )
    }
}

export default Starships