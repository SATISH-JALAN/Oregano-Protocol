import Header from "@/components/Header";
import TransactionHistory from "@/components/TransactionHistory";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <TransactionHistory />
      </main>
    </div>
  );
}
