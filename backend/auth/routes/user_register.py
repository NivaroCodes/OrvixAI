from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from schemas.user import UserCreate
from models.user import User
from database.connect import get_db

router = APIRouter()

@router.post("/auth/register")
async def user_register(user: UserCreate, db: AsyncSession = Depends(get_db)):
  query = select(User).where(User.email == user.email)
  result = await db.execute(query)
  existing_user = result.scalars().first()

  if existing_user:
      raise HTTPException(status_code=400, detail="Email already registered")
