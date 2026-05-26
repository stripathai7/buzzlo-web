from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.contact import router
from config import settings

app = FastAPI(
    title="Buzzlo AI API",
    description="Backend API for the Buzzlo AI marketing website",
    version="1.0.0",
    docs_url="/docs",
    redoc_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=False,
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

app.include_router(router)


@app.get("/health")
async def health():
    return {"status": "ok", "service": "Buzzlo AI API"}
