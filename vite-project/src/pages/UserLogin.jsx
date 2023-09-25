import axios from "axios";
import { useContext, useState } from "react";
import { LoginContext } from "../App";

export const UserLogin = () => {
  const { loginSuccess, setLoginSuccess } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8100/users");
      const users = res.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setLoginSuccess(true);
        console.log("Login success");
        setEmail("");
        setPassword("");
        localStorage.setItem("user", user.email);
        localStorage.setItem("token", user.token);
      } else {
        setLoginSuccess(false);
        console.log("Login failed");
      }
    } catch (err) {
      console.log("login fail");
    }
  };

  return (
    <div>
      {!loginSuccess ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>Successfully Logged in</h1>
        </div>
      )}
    </div>
  );
};
