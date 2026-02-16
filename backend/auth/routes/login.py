from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database.connect import get_db
from models.user import User
from schemas.user import UserLogin
from auth.utils import verify_password, create_access_token

router = APIRouter()

@router.post("/auth/login")
async def login_user(user: UserLogin, db: AsyncSession = Depends(get_db)):
  query = select(User).filter(User.email == user.email)
  result = await db.execute(query)
  db_user = result.scalar_one_or_none()

  if not db_user or not verify_password(user.password, db_user.password_hash):
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED, 
        detail="Incorrect email or password"
    )
  
  access_token = create_access_token(data={"sub": db_user.email})
  return {"access_token": access_token, "token_type": "bearer"}