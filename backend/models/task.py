from database.base import Base
from enum import Enum
from sqlalchemy import Column, ForeignKey, String, Integer, DateTime, func, Enum as SQLAlchemyEnum, relationship

class TaskStatus(str, Enum):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"

class Task(Base):
    __tablename__ = "tasks"
    
    task_id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255))
    description = Column(String, nullable=True)
    status = Column(SQLAlchemyEnum(TaskStatus), default=TaskStatus.TODO, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    user_id = Column(Integer, ForeignKey("user.id"))

    owner = relationship("User", back_populates="tasks")

    