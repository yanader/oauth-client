import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/api/me")
      .then(res => setUser(res.data))
      .catch(err => {
        console.error(err);
        window.location.href = "/"; // redirect if not logged in
      });
  }, []);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Welcome, {user.name}</h1>
      <p>{JSON.stringify(user, null, 2)}</p>

      <img
        src={user.pictureUrl}
        alt="profile"
        style={{ borderRadius: "50%", width: "140px", marginTop: "20px" }}
      />

      <p>Email: {user.email}</p>

      <a href="http://localhost:8080/logout">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Logout
        </button>
      </a>
    </div>
  );
}
