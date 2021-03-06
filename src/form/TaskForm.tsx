import React, { useState , FunctionComponent} from "react";

interface myProps {
    onAdd: onTAdd;
}

const TaskForm: FunctionComponent<myProps> = ({onAdd}) => {

    const [newTask, setNewTask] = useState({title: '', description: '', isDone: false});

    let handleChange = (event: React.ChangeEvent<HTMLInputElement>, property: string) => {
        const task_prop: myTask = {...newTask};
        Object.defineProperty(task_prop, property, {
            value: event.currentTarget.value
        })
        setNewTask(task_prop);
    }

    return (
        <form onSubmit={(e) => {onAdd(e, newTask); setNewTask({title: '', description: '', isDone: false})}} className="task-form">
            <input value={newTask.title} onChange={(e) => handleChange(e, 'title')} placeholder="Titre..."></input>
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TaskForm;