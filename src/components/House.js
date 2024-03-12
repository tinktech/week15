import React from "react";
import { NewRoomForm } from './NewRoomForm';
import { Rooms } from './Rooms.js';

export const House = (props) => {
  const { house, updateHouse } = props;
  const rooms = house.rooms;

  const handleDeleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId)
    };
    updateHouse(updatedHouse);
  }

  const handleEditRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.map(t => {
        if (t._id === roomId) {
          return roomId;
        } else {
          return t;
        }
      })
    };
    updateHouse(updatedHouse);
    console.log('edit attempted');
  }

  // const editRoom = (roomId) => {
  //   const updatedHouse = {
  //     ...house,
  //     rooms: house.rooms
  //   };
  //   updateHouse(updatedHouse);
  // }

  const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

  // const rooms = () => (
  //   <ul>
  //     {house.rooms.map((room, index) => (
  //       <li key={index}>
  //         {/* <label>{`${room.name} Area: ${room.area}`}</label> */}
  //         {roomContent}
  //         <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <div>
      <h1>{house.name}</h1>
      <Rooms
        rooms={rooms}
        onEditRoom={handleEditRoom}
        onDeleteRoom={handleDeleteRoom}
      />
      {/* {rooms({rooms, houseId: house._id, deleteRoom})} */}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  )
};