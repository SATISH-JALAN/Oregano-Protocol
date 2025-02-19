import { useState } from "react";
import { useAccount } from "wagmi";

export default function TransactionForm() {
  const { address, isConnected } = useAccount();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Connect your wallet first!");
      return;
    }
    console.log(`Sending ${amount} ETH to ${to}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Send Gasless Transaction</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </form>
  );
}
