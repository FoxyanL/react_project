import './TaskList.css';
import { getTasks } from '../api/tasks';
import { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import CheckIcon from './icons/CheckIcon';
import PlusIcon from './icons/PlusIcon';
import AlertIcon from './icons/AlertIcon';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getTasks();
            setTasks(data);
        } catch (err) {
            setError('Не удалось загрузить задачи');
            console.error('Ошибка загрузки:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="task-list-container">
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Загрузка паутины...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="task-list-container">
                <div className="error-state">
                    <AlertIcon className="error-icon" />
                    <h3>{error}</h3>
                    <button onClick={loadTasks} className="retry-btn">
                        Попробовать снова
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="task-list-container">
            <div className="task-list-header">
                <div className="header-content">
                    <h1 className="task-list-title">
                        <CheckIcon className="title-icon" />
                        <h3 className='tasks-web'>Паутина задач</h3>
                    </h1>
                    <span className="task-count">{tasks.length} нитей</span>
                </div>
                <button className="add-task-btn">
                    <PlusIcon />
                    Сплести новую
                </button>
            </div>
            
            {tasks.length === 0 ? (
                <div className="empty-state">
                    <svg className="empty-icon" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" stroke="rgba(138, 43, 226, 0.3)" strokeWidth="2" fill="none"/>
                        <path d="M 100 20 L 100 180 M 20 100 L 180 100" stroke="rgba(138, 43, 226, 0.3)" strokeWidth="2"/>
                    </svg>
                    <h3>Паутина пуста</h3>
                    <p>Начните плести свою первую задачу</p>
                </div>
            ) : (
                <div className="task-list">
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;