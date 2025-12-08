from sqlalchemy import Column
from sqlalchemy import Integer, String, DateTime
from app.db.base import Base
from app.models.task import Status
from datetime import datetime, timedelta

class Task(Base):
    __tablename__ = "tasks"
    
    id = Column(Integer, primary_key=True)
    title = Column(String(255), nullable=False)
    description = Column(String(500))
    status = Column(String(50), default=Status.PENDING)
    due_date = Column(DateTime, default=lambda: datetime.utcnow() + timedelta(weeks=1))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)