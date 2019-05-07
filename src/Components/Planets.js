import React from "react"
import Planet from "./Planet"

class Planets extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
            planets: null 
        }
    }
    componentDidMount() {
        fetch("https://swapi.co/api/planets")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loaded: true,
                    planets: data.results
                })
            })
    }
    render () {
        let dataToRender = "";
        if (this.state.loaded) {
            dataToRender = this.state.planets.map(data => <Planet key={data.name} planet={data}/>)
        }
        return (
            <div>
                <p>This is where you get to learn great stuff about Star Wars Planets</p>
                {dataToRender}
            </div>
        )
    }
}

export default Planets