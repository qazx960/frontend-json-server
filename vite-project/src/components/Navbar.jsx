import { useContext } from "react";
import "../App.css";
import { LoginContext } from "../App";

export const Navbar = () => {
  const { loginSuccess, setLoginSuccess } = useContext(LoginContext);

  const userEmail = localStorage.getItem("user");

  const handleLogout = () => {
    console.log("Logging out");
    setLoginSuccess(false);
    localStorage.clear();
  };

  return (
    <header className="navbar">
      {!loginSuccess ? (
        <div>
          <p>Not Logged in</p>
        </div>
      ) : (
        <div>
          <p>Hello {userEmail}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};
