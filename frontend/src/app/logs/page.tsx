import { getLogs } from "@/lib/api";

export default async function LogsPage({ searchParams }: { searchParams: { id?: string } }) {
  const id = searchParams.id || "SHP001";
  const logs = await getLogs(id);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Activity Logs: {id}</h1>
      <div className="space-y-2 border p-4 rounded bg-gray-50">
        {logs.length > 0 ? logs.map((log: any, i: number) => (
          <div key={i} className="border-b last:border-0 pb-2">
            <span className="text-xs text-gray-400">{log.timestamp}</span>
            <p>{log.message}</p>
          </div>
        )) : <p>No logs found for this shipment.</p>}
      </div>
    </div>
  );
}
