from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str = Field(min_length=5, max_length=20)
    age: Optional[int] = None

class UserLogin(UserBase):
    password: str

class UserOut(UserBase):
    id: int
    age: Optional[int] = None
    is_active: bool = True

    class Config:
        from_attributes = True

class UserResponse(UserBase):
    id: int
    email: str
    is_active: bool

    class Config:
        from_attributes = True