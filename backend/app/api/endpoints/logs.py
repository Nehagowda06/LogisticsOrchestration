from fastapi import APIRouter

router = APIRouter()

MOCK_LOGS = {
    "SHP001": [
        {"timestamp": "2026-04-28T10:00:00Z", "message": "Departed San Francisco"},
        {"timestamp": "2026-04-28T14:00:00Z", "message": "Arrived at Chicago Hub"},
    ],
    "SHP002": [
        {"timestamp": "2026-04-28T09:00:00Z", "message": "Departed Los Angeles"},
        {"timestamp": "2026-04-28T12:00:00Z", "message": "Weather alert in Portland - Delay expected"},
    ],
}

@router.get("/{shipment_id}")
async def get_logs(shipment_id: str):
    return MOCK_LOGS.get(shipment_id, [])
