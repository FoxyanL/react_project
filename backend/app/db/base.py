from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base


DB_PATH = 'sqlite+aiosqlite:///tasks.db'

engine = create_async_engine(DB_PATH)
Base = declarative_base()
session = async_sessionmaker(engine)

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def get_db():
    async with session() as db:
        yield db

