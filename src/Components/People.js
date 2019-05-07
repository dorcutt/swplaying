import React from "react"
import Character from './Character'

class People extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
            characters: null 
        }
    }
    componentDidMount() {
        fetch("https://swapi.co/api/people")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loaded: true,
                    characters: data.results
                })
            })
    }
    render () {
        let dataToRender = "";
        if (this.state.loaded) {
            dataToRender = this.state.characters.map(data => <Character key={data.name} character={data}/>)
        }
        return (
            <div>
                <p>This is where you get to learn great stuff about Star Wars People</p>
                {dataToRender}
            </div>
        )
    }
}

export default People