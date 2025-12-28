import React, { useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const addFleet = (fleet) => {
    setFleets((prev) => [...prev, fleet]);
  };

  const updateDriver = useCallback((id, driverName) => {
    setFleets((prev) =>
      prev.map((fleet) =>
        fleet.id === id ? { ...fleet, driver: driverName } : fleet
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((fleet) =>
        fleet.id === id
          ? {
              ...fleet,
              available: fleet.available === "Available" ? "Unavailable" : "Available",
            }
          : fleet
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      setFleets((prev) => prev.filter((fleet) => fleet.id !== id));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar addFleet={addFleet} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              updateDriver={updateDriver}
              toggleAvailability={toggleAvailability}
              deleteFleet={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
