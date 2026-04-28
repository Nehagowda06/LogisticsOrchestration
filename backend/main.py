import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import shipments, logs
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Logistics AI API")

allowed_origins = os.getenv("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(shipments.router, prefix="/api/shipments", tags=["shipments"])
app.include_router(logs.router, prefix="/api/logs", tags=["logs"])

@app.get("/")
async def root():
    return {"message": "Logistics AI API is running"}
