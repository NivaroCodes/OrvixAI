from fastapi import APIRouter 

router = APIRouter()

@router.post("task/create")
async def create_task():
  pass