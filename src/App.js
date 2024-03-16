import React, {Component} from 'react';
import './App.css';
import { HousesList } from './components/HousesList.js';

// const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    )
  }
}
