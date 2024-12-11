import Avatar from "./Avatar.jsx";
import { useEffect, useState } from "react";
import viewIcon from '../assets/viewicon.png'
import TableApp from "./TableApp.jsx";
import TableRow from "./TableRow.jsx";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState([])
  const [balance, setBalance] = useState([])
  const [password, setPassword] = useState([])

  useEffect(() => {
    async function getData() {
      const url = "http://127.0.0.1:3000/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const loginOBJ = localStorage.getItem("login")
    if (loginOBJ) {
        const json  = (JSON.parse(loginOBJ))
        console.log(json)
        setUserName(json.nama);
    }
  }, []);

  useEffect(() => {
    const balanceOBJ = localStorage.getItem("login")
    if (balanceOBJ) {
        const json  = (JSON.parse(balanceOBJ))
        console.log(json)
        setBalance(json.balance);
    }
  }, []);

  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
          {`Good Morning, ${userName}`}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar name = { userName }/>
      </div>
      <div className="flex mt-[4.5rem] gap-x-12">
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold">100899</p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold">
              {showBalance ? "Rp10.000.000,00" : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Table</h1>
      <div className="overflow-x-auto">
        <TableApp/>
      </div>
    </div>
    </section>
  );
}

export default Hero;
