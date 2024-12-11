import { useState } from "react";

function Transfer() {
  const [form, setForm] = useState({
    recipient: "900782139 (Giz)",
    amount: "IDR 150.000,00",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer Details:", form);
    alert("Transfer Submitted!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Transfer</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipient */}
          <div>
            <label className="block font-medium mb-1">To</label>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <span className="text-gray-700">{form.recipient}</span>
              <button
                type="button"
                className="ml-auto text-gray-500 hover:text-gray-700"
              >
                ▼
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block font-medium mb-1">Amount</label>
            <input
              type="text"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full bg-gray-100 p-3 rounded-md text-xl font-bold focus:outline-none focus:ring focus:ring-teal-400"
            />
            <p className="text-sm text-teal-600 mt-1">
              Balance: IDR 10.000.000
            </p>
          </div>

          {/* Notes */}
          <div>
            <label className="block font-medium mb-1">Notes:</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring focus:ring-teal-400"
              placeholder="Optional"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md font-medium hover:bg-teal-700 transition"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
