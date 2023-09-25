import { createContext, useState } from "react";
import "./App.css";

import { UserLogin } from "./pages/UserLogin";
import { Navbar } from "./components/Navbar";

export const LoginContext = createContext();

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        loginSuccess,
        setLoginSuccess,
      }}
    >
      <div>
        <Navbar //
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
        />
        <div>
          <p>Note: Login success will only work with the user info below</p>
        </div>
        <UserLogin
          loginSuccess={loginSuccess}
          setLoginSuccess={setLoginSuccess}
        />
        <div className="user--info">
          <div>
            <h3>test login</h3>
            <p>test@test.com</p>
            <p>123</p>
          </div>

          <div>
            <h3>test login</h3>
            <p>test2@test.com</p>
            <p>1234</p>
          </div>
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
