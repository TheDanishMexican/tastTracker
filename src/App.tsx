import TaskList from './components/TaskList'
import tasks from './data/tasks'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
    return (
        <>
            <TaskList tasks={tasks} />
        </>
    )
}

export default App
