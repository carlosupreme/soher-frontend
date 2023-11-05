import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    axios
      .get("https://soher-production.up.railway.app/api/works")
      .then((res) => {
        setWorks(res.data.data);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {works.map((work) => {
          return (
            <div key={work.id} style={{ border: "1px solid red" }}>
              <h1>{work.id}</h1>
              <h2>{work.title}</h2>
              <h3>Solicitado por: {work.client.name}</h3>
              <h4>{work.created_at}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
