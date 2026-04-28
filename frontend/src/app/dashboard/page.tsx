import { getShipments } from "@/lib/api";
import Link from "next/link";

export default async function DashboardPage() {
  const shipments = await getShipments();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shipment Dashboard</h1>
      <div className="grid gap-4">
        {shipments.map((shipment: any) => (
          <Link key={shipment.id} href={`/shipment/${shipment.id}`}>
            <div className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">{shipment.id}</span>
                <span className={`px-2 py-1 rounded text-sm ${shipment.status === 'Delayed' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {shipment.status}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {shipment.origin} &rarr; {shipment.destination}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
