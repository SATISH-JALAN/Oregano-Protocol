"use client";

import { useEffect, useState } from "react";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Mock transaction data (replace with API call later)
    setTransactions([
      { id: 1, from: "0x123...", to: "0x456...", amount: "0.5 ETH" },
      { id: 2, from: "0x789...", to: "0xabc...", amount: "1.2 ETH" },
    ]);
  }, []);

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className="border-b py-2">
            <p>From: {tx.from}</p>
            <p>To: {tx.to}</p>
            <p>Amount: {tx.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
