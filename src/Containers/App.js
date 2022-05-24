import React from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox'
import Scroll from '../Components/Scroll'
// import {robots} from './robots'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({robots:user}))
  }

  onSearchChange = (event) => {
    this.setState({searchField : event.target.value });
  }
  render(){
    
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });


    return (this.state.robots.length === 0) ? <h1>Loading</h1> : (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
            <Scroll>
              <Cardlist robots = {filteredRobots}/>
            </Scroll> 
        </div>
        
      );
    }
    
  }

export default App;
