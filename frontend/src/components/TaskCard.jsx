import './TaskCard.css';
import CalendarIcon from './icons/CalendarIcon';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';

function TaskCard({ task }){
    // Форматирование даты
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Маппинг статусов на русский
    const statusLabels = {
        'в ожидании': 'Ожидает',
        'в процессе': 'В работе',
        'завершено': 'Завершено'
    };

    return (
        <div className="task-card">
            <div className="task-card-header">
                <h3 className="task-title">{task.title}</h3>
                <span className={`task-status status-${task.status}`}>
                    {statusLabels[task.status] || task.status}
                </span>
            </div>
            
            {task.description && (
                <p className="task-description">{task.description}</p>
            )}
            
            <div className="task-card-footer">
                <div className="task-dates">
                    <div className="task-date">
                        <CalendarIcon className="date-icon" />
                        <span className="date-label">Дедлайн: {formatDate(task.due_date)}</span>
                    </div>
                    <div className="task-date created">
                        <span className="date-label-small">Создано: {formatDate(task.created_at)}</span>
                    </div>
                </div>
                
                <div className="task-actions">
                    <button className="task-btn edit-btn">
                        <EditIcon />
                    </button>
                    <button className="task-btn delete-btn">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;