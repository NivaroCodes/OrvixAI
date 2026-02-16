from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from schemas.user import UserCreate, UserOut, UserResponse
from models.user import User
from database.connect import get_db
from auth.utils import hash_password


router = APIRouter()

@router.get("/get/users", response_model=list[UserResponse])
async def get_users(db: AsyncSession = Depends(get_db)):
  query = select(User)
  result = await db.execute(query)
  users = result.scalars().all()
  return users


@router.post("/auth/register", response_model=UserOut)
async def user_register(user: UserCreate, db: AsyncSession = Depends(get_db)):
  query = select(User).where(User.email == user.email)
  result = await db.execute(query)
  existing_user = result.scalars().first()

  if existing_user:
      raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
  
  hashed_pwd = hash_password(user.password)
  
  new_user = User(
      email=user.email,
      password_hash=hashed_pwd,
      age=user.age
  )
  db.add(new_user)
  await db.commit()
  await db.refresh(new_user)
  return new_user

