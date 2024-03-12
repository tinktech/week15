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

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addNewRoom = this.addNewRoom.bind(this);
//     this.deleteRoom = this.deleteRoom.bind(this);
//   }

//   render() {
//     const houses = this.state
//       ? this.state.houses.map((house, index) => 
//         <House
//           key={index}
//           data={house}
//           addNewRoom={this.addNewRoom}
//           deleteRoom={this.deleteRoom} />
//       )
//       : null;
//       return (
//         <div>
//           {houses}
//         </div>
//       );
//   }

//   componentDidMount() {
//     fetch(HOUSES_ENDPOINT)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           houses: data
//         });
//       });
//   }

//   deleteRoom(e, house, room) {
//     const index = house.rooms.indexOf(room);
//     house.rooms.splice(index, 1);
//     updateHouse(house)
//       .then(() => {
//         this.setState(state => {
//           for (let h of state.houses) {
//             if (h._id === house._id) {
//               let h = house;
//               break;
//             }
//           }
//           return state;
//         });
//       });
//       e.preventDefault();
//   }

//   addNewRoom(e, house, room) {
//     house.rooms.push(room);
//     updateHouse(house)
//       .then(() => {
//         this.setState(state => {
//           for (let h of state.houses) {
//             if (h._id === house._id) {
//               let h = house;
//               break;
//             }
//           }
//           return state;
//         });
//       });
//       e.preventDefault();
//   }
// }

// function updateHouse(house) {
//   return fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(house)
//   });
// }