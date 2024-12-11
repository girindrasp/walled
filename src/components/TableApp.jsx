import { useEffect, useState } from "react";
import TableRow from "./TableRow";


function TableApp() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="w-full flex justify-between items-center mb-3 mt-1">
        <div className="ml-3 w-full max-w-sm min-w-[200px] relative">
          <div className="relative">
            <input
              className="bg-white w-full pr-11 h-10 pl-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="Search"
            />
            <button
              className="absolute h-8 w-8 left-1 top-1 my-auto px-2 flex items-center bg-white rounded"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-8 text-slate-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-3 text-sm text-slate-700 whitespace-nowrap">
          <span className="font-semibold">Show</span>
          <div className="flex items-center border border-slate-300 rounded px-3 py-1 cursor-pointer hover:border-slate-400 transition duration-200 ease-in-out">
            <span>Last 10 transaction</span>
            <svg
              className="ml-1 h-4 w-4 text-slate-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.682l3.71-3.494a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="font-semibold">Sort by</span>
          <div className="flex items-center border border-slate-300 rounded px-3 py-1 cursor-pointer hover:border-slate-400 transition duration-200 ease-in-out">
            <span>Date</span>
            <svg
              className="ml-1 h-4 w-4 text-slate-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.682l3.71-3.494a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex items-center border border-slate-300 rounded px-3 py-1 cursor-pointer hover:border-slate-400 transition duration-200 ease-in-out">
            <span>Descending</span>
            <svg
              className="ml-1 h-4 w-4 text-slate-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06-.02L10 10.682l3.71-3.494a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col w-full h-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-slate-500">
                  Date & Time
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-slate-500">
                  Type
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-slate-500">
                  From/To
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-slate-500">
                  Description
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal leading-none text-slate-500">
                  Amount
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr
                key={txn.id}
                className={`hover:bg-slate-50 border-b border-slate-200 ${
                  index % 2 === 0 ? "bg-gray-100" : ""
                }`}
              >
                <td className="p-4 py-5 font-semibold text-sm text-slate-800">
                  {txn.dateTime}
                </td>
                <td className="p-4 py-5 text-sm text-slate-500">{txn.type}</td>
                <td className="p-4 py-5 text-sm text-slate-500">
                  {txn.fromTo}
                </td>
                <td className="p-4 py-5 text-sm text-slate-500">
                  {txn.description}
                </td>
                <td className="p-4 py-5 text-sm text-slate-500">
                  {txn.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex space-x-1">
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              Prev
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
              1
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              2
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              3
            </button>
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableApp;
