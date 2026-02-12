from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
  email: EmailStr = Field(max_length=50)
  password: str = Field(mix_length=8, max_length=20)


class UserRead(BaseModel):
  id: int
  email: EmailStr
  is_active: bool


class UserLogin(BaseModel):
  email: EmailStr
  password: str
