import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
const API_URL = import.meta.env.VITE_BACK_END_URL;

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <Header />
      <div className="profile">
        <h2>Profile</h2>
        {user ? (
          <div className="profile__info">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more user info as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
