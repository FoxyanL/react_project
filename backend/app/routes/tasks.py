from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.schemas.task import TaskCreate, TaskUpdate, TaskRead
from app.db.base import get_db
from app.db.models import Task as TaskModel


router = APIRouter(prefix="/api/v1/tasks", tags=["tasks"])

@router.post("/", response_model=TaskRead, status_code=201)
async def create_task(task: TaskCreate, db: AsyncSession = Depends(get_db)):
    db_task = TaskModel(
        title=task.title,
        description=task.description,
        status=task.status,
        due_date=task.due_date
    )
    db.add(db_task)
    await db.commit()
    await db.refresh(db_task)
    return db_task

@router.get("/", response_model=list[TaskRead])
async def get_tasks(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(TaskModel))
    tasks = result.scalars().all()
    return tasks

@router.get("/{task_id}", response_model=TaskRead)
async def get_task(task_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(TaskModel).where(TaskModel.id == task_id))
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@router.patch("/{task_id}", response_model=TaskRead)
async def update_task(task_id: int, task_update: TaskUpdate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(TaskModel).where(TaskModel.id == task_id))
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    update_data = task_update.model_dump(exclude_unset=True)
    
    for key, value in update_data.items():
        setattr(task, key, value)
    await db.commit()
    await db.refresh(task)
    return task

@router.delete("/{task_id}", status_code=204)
async def delete_task(task_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(TaskModel).where(TaskModel.id == task_id))
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    await db.delete(task)
    await db.commit()
