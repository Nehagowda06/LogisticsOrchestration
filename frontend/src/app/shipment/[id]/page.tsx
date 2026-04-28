import { getShipment, getLogs } from "@/lib/api";
import Link from "next/link";

export default async function ShipmentPage({ params }: { params: { id: string } }) {
  const shipment = await getShipment(params.id);
  const logs = await getLogs(params.id);

  return (
    <div className="p-8">
      <div className="mb-6 flex gap-4">
        <Link href="/dashboard" className="text-blue-600 hover:underline">&larr; Back to Dashboard</Link>
        <Link href={`/decision-explorer?id=${params.id}`} className="text-blue-600 hover:underline">Decision Explorer</Link>
        <Link href={`/logs?id=${params.id}`} className="text-blue-600 hover:underline">Full Logs</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Shipment {shipment.id}</h1>
      
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="border p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          <div className="space-y-2">
            <p><span className="text-gray-500">Status:</span> {shipment.status}</p>
            <p><span className="text-gray-500">Origin:</span> {shipment.origin}</p>
            <p><span className="text-gray-500">Destination:</span> {shipment.destination}</p>
            <p><span className="text-gray-500">Current Location:</span> {shipment.current_location}</p>
          </div>
        </div>
        
        <div className="border p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {logs.map((log: any, i: number) => (
              <div key={i} className="text-sm">
                <span className="text-gray-400 block">{new Date(log.timestamp).toLocaleString()}</span>
                <span>{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
