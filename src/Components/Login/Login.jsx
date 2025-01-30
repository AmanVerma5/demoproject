import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      toast("Username or Password cant be empty");
    }
  };

  return (
    <div className="login-container">
      <div className="upper-section"></div>
      <div className="divider"></div>
      <div className="login">
        <div className="welcome-msg">Welcome back! 👋</div>
        <h1>Sign in to your account</h1>
        <div className="label">Email</div>
        <br></br>
        <input
          className="login-input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <div className="label">Password</div>
        <br></br>
        <input
          className="login-input"
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={handleLogin}>
          Continue
        </button>
        <div className="forget-msg">Forget your password?</div>
      </div>
      <div className="account-creation">
        Don't have an account? <span className="sign">Sign up</span>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Login;
