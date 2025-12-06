# Backend TODO — SpiderTasks (FastAPI)

## Этап 1 — Инициализация проекта
- [ ] Установить основные зависимости:
  - fastapi
  - uvicorn
  - sqlalchemy / sqlmodel или tortoise-orm
  - pydantic
  - python-dotenv
- [ ] Создать структуру папок:
  - app/
    - main.py
    - models/
    - schemas/
    - routes/
    - db/
- [ ] Добавить .gitignore
- [ ] Запустить сервер и проверить `/docs`

## Этап 2 — Модель данных
- [ ] Создать модель Task
  - id
  - title
  - description
  - status (todo | in_progress | done)
  - priority (low | medium | high)
  - labels (array)
  - parent_id (nullable)
  - due_date (datetime)
  - created_at
  - updated_at
- [ ] Создать Pydantic-схемы:
  - TaskCreate
  - TaskUpdate
  - TaskRead

## Этап 3 — CRUD эндпоинты
- [ ] POST /api/v1/tasks
- [ ] GET /api/v1/tasks
- [ ] GET /api/v1/tasks/{id}
- [ ] PATCH /api/v1/tasks/{id}
- [ ] DELETE /api/v1/tasks/{id}
- [ ] Добавить обработку ошибок (404, 400, 422)

## Этап 4 — База данных
- [ ] Настроить подключение к SQLite
- [ ] Реализовать сессии/репозиторий
- [ ] Протестировать CRUD с реальной БД

## Этап 5 — Дополнительная логика
- [ ] GET /api/v1/tasks/{id}/tree (ветка задач)
- [ ] Фильтрация по:
  - статусу
  - меткам
  - приоритету
- [ ] Пагинация (?page=&limit=)

## Этап 6 — WebSocket (опционально)
- [ ] Создать websocket /api/v1/ws
- [ ] Отправка событий:
  - task_created
  - task_updated
  - task_deleted

## Этап 7 — Тестирование
- [ ] Установить pytest
- [ ] Написать тесты:
  - создание задачи
  - получение задач
  - обновление задачи
  - удаление задачи

## Этап 8 — Документация
- [ ] Обновить README
- [ ] Описать API эндпоинты
- [ ] Пример .env
- [ ] Инструкция запуска
