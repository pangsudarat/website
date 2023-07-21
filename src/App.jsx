import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [myname, setmyname] = useState("p");
  const [ran, setRan] = useState(0);

  useEffect(() => {
    setRan(Math.random());
  }, []);

  return (

    <div>
      
      <h3>{myname}</h3>
      <h3>{ran}</h3>

    <button onClick={() => {setmyname("AA" + Math.random()* 1000)}}>click</button>
    </div>
  );
}
export default App;
