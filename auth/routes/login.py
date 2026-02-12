from pkgutil import get_data
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from auth_handler import router as auth_router
from sqlalchemy import select
from database.connect import get_db
from models.user import User
from schemas.user import UserCreate, UserLogin

from models import UserBase


router = APIRouter()

@router.post("/auth/login")
async def login_user(user: UserLogin, db: AsyncSession = Depends(get_db)):
  query = select(User).filter(User.email == get_data.email).first()

  if not user:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
  
  