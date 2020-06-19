import React, { Component } from 'react';
import './App.css';
import CardLists from './CardLists';
import {robots} from './robots.js'
import Searchbox from './searchbox';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robot:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => robot)
  }
  onSearchChange= (event)=>{
    this.setState({searchField: event.target.value})
  }
  render(){
    const filterRobot= this.state.robot.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardLists robot={filterRobot}/>
      </div>

    );
  }
}

export default App;
