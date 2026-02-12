from datetime import datetime
from pydantic import BaseModel

from models.task import TaskStatus

class TaskCreate(BaseModel):
  title: str
  description: str | None = None
  status: TaskStatus = TaskStatus.TODO

class TaskUpdate(BaseModel):
  title: str | None = None
  description: str | None = None
  status: TaskStatus | None = None

class TaskRead(BaseModel):
  task_id: int
  title: str
  description: str | None
  status: TaskStatus
  created_at: datetime
  updated_at: datetime | None = None