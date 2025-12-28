import React from "react";

const FleetCard = React.memo(({ fleet, updateDriver, toggleAvailability, deleteFleet }) => {
  const handleUpdateDriver = () => {
    const name = prompt("Enter new driver name", fleet.driver);
    if (name && name.trim() !== "") updateDriver(fleet.id, name);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <img src="https://via.placeholder.com/150" alt="Vehicle" />
      <p><b>Reg No:</b> {fleet.regNo}</p>
      <p><b>Category:</b> {fleet.category}</p>
      <p><b>Driver:</b> {fleet.driver}</p>
      <p><b>Status:</b> {fleet.available}</p>
      <button onClick={handleUpdateDriver}>Update Driver</button>
      <button onClick={() => toggleAvailability(fleet.id)}>Toggle Availability</button>
      <button onClick={() => deleteFleet(fleet.id)}>Delete Vehicle</button>
    </div>
  );
});

export default FleetCard;
