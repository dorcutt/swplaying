import React from 'react';
import AppHeader from './Components/AppHeader';
import Home from './Components/Home';
import People from './Components/People';
import Planets from './Components/Planets';
import Starships from './Components/Starships';

import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selection: "home"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.log(event.target.name)
    this.setState({selection: event.target.name})
  }

  sectionToRender() {
    switch (this.state.selection) {
      case "home":
        return <Home />
      case "people":
        return <People />
      case 'planets':
        return <Planets />
      case 'starships':
        return <Starships />
      default:
        return <Home />
    }
  }

  render() {
      let toRender = this.sectionToRender()
      return (
        <div className="App" onClick={this.handleChange}>
          <AppHeader/>
          {toRender}
        </div>
      )
  }
}

export default App;
