const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function getShipments() {
  const res = await fetch(`${BASE_URL}/shipments/`);
  if (!res.ok) throw new Error("Failed to fetch shipments");
  return res.json();
}

export async function getShipment(id: string) {
  const res = await fetch(`${BASE_URL}/shipments/${id}`);
  if (!res.ok) throw new Error("Failed to fetch shipment");
  return res.json();
}

export async function getLogs(id: string) {
  const res = await fetch(`${BASE_URL}/logs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch logs");
  return res.json();
}
