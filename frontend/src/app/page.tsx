import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Logistics AI System</h1>
      <p className="text-xl text-gray-600 mb-8">Scalable AI-powered shipment management.</p>
      <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Enter Dashboard
      </Link>
    </div>
  );
}
