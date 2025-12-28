import React, { useState } from "react";

const Sidebar = ({ addFleet }) => {
  const [regNo, setRegNo] = useState("");
  const [category, setCategory] = useState("Auto");
  const [driver, setDriver] = useState("");
  const [available, setAvailable] = useState("Available");

  const handleAdd = () => {
    if (!regNo || !driver) {
      alert("Please fill required fields");
      return;
    }
    addFleet({
      id: Date.now(),
      regNo,
      category,
      driver,
      available,
    });
    setRegNo("");
    setCategory("Auto");
    setDriver("");
    setAvailable("Available");
  };

  return (
    <div style={{ padding: "1rem", width: "250px", borderRight: "1px solid #ccc" }}>
      <h3>Add Fleet</h3>
      <input
        placeholder="Vehicle Reg No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>
      <input
        placeholder="Driver Name"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />
      <select value={available} onChange={(e) => setAvailable(e.target.value)}>
        <option>Available</option>
        <option>Unavailable</option>
      </select>
      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;
