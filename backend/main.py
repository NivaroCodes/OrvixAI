import uvicorn
from fastapi import FastAPI
from auth.routes.user_register import router as user_register_router
from auth.routes.login import router as login_router
import models.task

app = FastAPI()

app.include_router(user_register_router)
app.include_router(login_router)


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
