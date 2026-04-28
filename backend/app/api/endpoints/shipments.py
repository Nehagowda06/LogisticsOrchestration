from fastapi import APIRouter, HTTPException

router = APIRouter()

MOCK_SHIPMENTS = [
    {"id": "SHP001", "status": "In Transit", "origin": "San Francisco", "destination": "New York", "current_location": "Chicago"},
    {"id": "SHP002", "status": "Delayed", "origin": "Los Angeles", "destination": "Seattle", "current_location": "Portland"},
    {"id": "SHP003", "status": "Delivered", "origin": "Houston", "destination": "Miami", "current_location": "Miami"},
]

@router.get("/")
async def get_shipments():
    return MOCK_SHIPMENTS

@router.get("/{shipment_id}")
async def get_shipment(shipment_id: str):
    shipment = next((s for s in MOCK_SHIPMENTS if s["id"] == shipment_id), None)
    if not shipment:
        raise HTTPException(status_code=404, detail="Shipment not found")
    return shipment
