import { useState } from "react";
import "./App.css";
import walledlogo from "./assets/Vector.png"
import NavItems from "./components/NavItems";

function App() {
  const [count, setCount] = useState(0);
  const menu = [
    {
      title: "Dashboard",
      link: "#"
    },
    {
      title: "Transfer",
      link: "#"
    },
    {
      title: "Top Up",
      link: "#"
    },
    {
      title: "Sign Out",
      link: "#"
    }
  ]

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <nav className = "flex items-center w-screen justify-between bg-white py-4 px-8">
        <img src = {walledlogo}/>
        <div className="flex gap-x-8">
          <NavItems menu={menu} />
        </div>
      </nav>
    </>
  );
}

export default App;
