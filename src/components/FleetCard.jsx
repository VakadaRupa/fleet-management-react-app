import React from "react";

const FleetCard = ({ fleet, onUpdate, onToggle, onDelete }) => {
  const updateDriver = () => {
    const name = prompt("Enter new driver name");
    if (name && name.trim()) {
      onUpdate(fleet.id, name);
    } else {
      alert("Invalid driver name");
    }
  };

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="vehicle" />
      <p>Reg: {fleet.reg}</p>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Status: {fleet.available ? "Available" : "Unavailable"}</p>

      <button onClick={updateDriver}>Update Driver</button>
      <button onClick={() => onToggle(fleet.id)}>Toggle Availability</button>
      <button onClick={() => onDelete(fleet.id)}>Delete</button>
    </div>
  );
};

export default React.memo(FleetCard);

