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

  const handleEditRoom = (updatedRoom) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.map(currentRoom => {
        if (currentRoom._id === updatedRoom._id) {
          return updatedRoom;
        } else {
          return currentRoom;
        }
      })
    };
    updateHouse(updatedHouse);
  }

  const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

  return (
    <div>
      <h1>{house.name}</h1>
      <Rooms
        rooms={rooms}
        onEditRoom={handleEditRoom}
        onDeleteRoom={handleDeleteRoom}
      />
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  )
};