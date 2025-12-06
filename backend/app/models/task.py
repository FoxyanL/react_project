from pydantic import BaseModel, Field
from enum import Enum
from typing import Optional, List
from datetime import datetime

class Status(str, Enum):
    PENDING = "в ожидании"
    IN_PROGRESS = "в процессе"
    COMPLETED = "завершено"

class Base(BaseModel):
    id: int
    created_at: datetime
    updated_at: datetime

class Task(Base):
    title: str = Field(..., max_length=255)
    description: Optional[str] = Field(None, max_length=1000)
    status: Status = Field(default=Status.PENDING)
    due_date: datetime = Field(...)