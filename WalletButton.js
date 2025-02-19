"use client";

import { useAccount, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex items-center space-x-4">
      {isConnected ? (
        <>
          <span className="text-white bg-gray-800 px-4 py-2 rounded-lg">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <button
            onClick={() => disconnect()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Disconnect
          </button>
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
