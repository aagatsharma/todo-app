import { NavBar, PerformTask } from "./components";
import Auth from "./components/Auth";
import { useState, useEffect } from "react";
import { auth } from "./config/firebase-config";

function App() {
  const [login, setlogin] = useState(false);
  const [username, setusername] = useState("");

  return (
    <div>
      <NavBar login={login} setlogin={setlogin} />
      {login ? <Auth login={login} setlogin={setlogin} /> : <PerformTask />}
    </div>
  );
}

export default App;
