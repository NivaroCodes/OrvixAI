from fastapi import Depends, APIRouter, HTTPException, status
from fastapi.security import OAuth2Password, OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

router = APIRouter()

pwd_context = CryptContext(schemas=["bcrypt"], deprecated="auto")
oauth_scheme = OAuth2PasswordBearer(token_url="token")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


