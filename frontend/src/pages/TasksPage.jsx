import TaskList from "../components/TaskList";
import WebBackground from "../components/WebBackground";
import './TasksPage.css';

function TasksPage() {
    return (
        <div className="tasks-page">
            <div className="tasks-page-background">
                <WebBackground opacity={0.1} />
            </div>
            
            <TaskList />
        </div>
    );
}

export default TasksPage;