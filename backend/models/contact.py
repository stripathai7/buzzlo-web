from pydantic import BaseModel, EmailStr, field_validator


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    business_type: str
    message: str

    @field_validator("name")
    @classmethod
    def name_min_length(cls, v: str) -> str:
        if len(v.strip()) < 2:
            raise ValueError("Name must be at least 2 characters")
        return v.strip()

    @field_validator("phone")
    @classmethod
    def phone_valid(cls, v: str) -> str:
        digits = "".join(c for c in v if c.isdigit())
        if len(digits) < 10 or len(digits) > 15:
            raise ValueError("Phone must contain 10–15 digits")
        return v.strip()

    @field_validator("message")
    @classmethod
    def message_min_length(cls, v: str) -> str:
        if len(v.strip()) < 10:
            raise ValueError("Message must be at least 10 characters")
        if len(v.strip()) > 2000:
            raise ValueError("Message must be under 2000 characters")
        return v.strip()

    @field_validator("business_type")
    @classmethod
    def business_type_not_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Business type is required")
        return v.strip()
