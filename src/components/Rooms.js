import React, { useState } from "react";

export function Rooms({
  rooms,
  onEditRoom,
  onDeleteRoom
}) {
  return (
    <ul>
      {rooms.map((room, index) => (
        <li key={index}>
          <Room
            room={room}
            onChange={onEditRoom}
            onDelete={onDeleteRoom}
          />
        </li>
      ))}
    </ul>
  );
}


function Room({room, onChange, onDelete}) {
  // const [name, setName] = useState('');
  // const [area, setArea] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  let roomContent;
  if (isEditing) {
    roomContent = (
      <>
        <input
          type="text"
          defaultValue={room.name}
          onChange={(e) => {
            onChange({
              ...room,
              name: e.target.value
            });
          }}
        />
        <input
          type="text"
          defaultValue={room.area}
          onChange={(e) => {
            onChange({
              ...room,
              area: e.target.value
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
    console.log({isEditing});
    console.log({room});
  } else {
    roomContent = (
      <>
        {`${room.name} Area: ${room.area}`}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
    console.log({isEditing});
    console.log({room});
  }

  return (
    <label>
      {roomContent}
      <button onClick={() => onDelete(room._id)}>Delete</button>
    </label>
  )
}