import React from "react";
import { Link } from "react-router-dom";
import { Users } from "./Users";

export const Admin: React.FC = () => {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <Users />
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};
