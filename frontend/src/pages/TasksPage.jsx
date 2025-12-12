import TaskList from "../components/TaskList";
import DetailedWebBackground from "../components/DetailedWebBackground";
import './TasksPage.css';

function TasksPage() {
    return (
        <div className="tasks-page">
            <div className="tasks-page-background">
                <DetailedWebBackground />
            </div>
            
            <TaskList />
        </div>
    );
}

export default TasksPage;