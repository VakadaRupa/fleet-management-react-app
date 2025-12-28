import { useState } from "react";

const Sidebar = ({ setFleets }) => {
  const [reg, setReg] = useState("");
  const [category, setCategory] = useState("");
  const [driver, setDriver] = useState("");
  const [available, setAvailable] = useState(true);

  const handleAdd = () => {
    if (!reg || !category || !driver) {
      alert("All fields are required");
      return;
    }

    setFleets(prev => [
      ...prev,
      {
        id: Date.now(),
        reg,
        category,
        driver,
        available
      }
    ]);

    setReg("");
    setCategory("");
    setDriver("");
    setAvailable(true);
  };

  return (
    <div>
      <h3>Add Fleet</h3>

      <input
        placeholder="Vehicle Reg No"
        value={reg}
        onChange={e => setReg(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>

      <input
        placeholder="Driver Name"
        value={driver}
        onChange={e => setDriver(e.target.value)}
      />

      <select
        value={available}
        onChange={e => setAvailable(e.target.value === "true")}
      >
        <option value="true">Available</option>
        <option value="false">Unavailable</option>
      </select>

      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;
