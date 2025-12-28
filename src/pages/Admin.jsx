import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const updateDriver = useCallback((id, newDriver) => {
    setFleets(prev =>
      prev.map(f =>
        f.id === id ? { ...f, driver: newDriver } : f
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets(prev =>
      prev.map(f =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure?")) {
      setFleets(prev => prev.filter(f => f.id !== id));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar setFleets={setFleets} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {fleets.map(fleet => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onUpdate={updateDriver}
              onToggle={toggleAvailability}
              onDelete={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
