from database.base import Base
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Boolean


class User(Base):
  __tablename__ = "users"

  id = Column(Integer, primary_key=True, index=True)
  age = Column(Integer, nullable=True)
  email = Column(String(255), unique=True, index=True, nullable=False)
  password_hash = Column(String(255), nullable=False)
  is_active = Column(Boolean, default=True)
  tasks = relationship("Task", back_populates=("owner"))


  
  

