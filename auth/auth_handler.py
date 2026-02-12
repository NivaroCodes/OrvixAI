from fastapi import Depends, APIRouter, HTTPException, status
from fastapi.security import OAuth2Password, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

router = APIRouter()

pwd_context = CryptContext(schemas=["bcrypt"], deprecated="auto")



def hash_password(password: str) -> str:
    return pwd_context.hash(password)


