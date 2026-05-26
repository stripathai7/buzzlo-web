from __future__ import annotations
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    recipient_email: str = "buzzlo.biz7@gmail.com"
    allowed_origins: List[str] = ["http://localhost:3000", "https://buzzlo.biz"]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
