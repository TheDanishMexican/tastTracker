import React from 'react'
import Task from '../models/Task'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface TaskListProps {
    tasks: Task[]
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((taskItem: Task, index: number) => (
                <li style={{ listStyle: 'none' }} key={index}>
                    <Card sx={{ maxWidth: 275 }}>
                        <CardContent>
                            <h2>{taskItem.title}</h2>
                            <p>{taskItem.description}</p>
                        </CardContent>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export default TaskList
