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
  const [isEditing, setIsEditing] = useState(false);
  const editing = () => {
    setIsEditing(current => !current);
  }

  let roomContent;
  let editButton;
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
      </>
    );
    editButton = "Save";
  } else {
    roomContent = (
      <>
        {`${room.name} Area: ${room.area}`}
      </>
    );
    editButton = "Edit";
  }

  return (
    <label>
      {roomContent}
      <button onClick={editing}>{editButton}</button>
      <button onClick={() => onDelete(room._id)}>Delete</button>
    </label>
  )
}