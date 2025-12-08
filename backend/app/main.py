from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.db.base import init_db
from app.db.models import Task
from app.routes import tasks


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    print("База данных инициализирована")
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(tasks.router)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

'''
@app.on_event("startup")
def on_startup():
    init_db()
'''

@app.get("/")
async def root():
    return {"message": "Hello, World!"}
