import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user, logout } = useContext(UserContext);

  if (!user) return <h2>No user logged in</h2>;

  return (
    <>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={logout}>Logout</button>
    </>
  );
};

export default UserProfile;
