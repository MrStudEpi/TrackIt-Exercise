import React, {FunctionComponent} from "react";
import TaskForm from "./form/TaskForm";
import Task from "./Task";
import uuid from 'uuid-random';

interface myProps {
    category: myCategorie,
    onDelete: onCDelete,
    doUpdate: onCUpdate
}

const Category: FunctionComponent<myProps> = ({category, onDelete, doUpdate}) => {

    let TaskAdd = (event: React.FormEvent<EventTarget>, task: myTask) => {
        event.preventDefault();
        if (task.title.length <= 0)
            return 0;
        var current = new Date();
        let tasks_list = [...category!.tasks];
        tasks_list.push({id: uuid(), title: task.title,
        description: '', isDone: task.isDone,
        createdAt: current.toLocaleDateString().toString()});
        category!.tasks = tasks_list;
        doUpdate(category);
    }

    let TaskDelete = (task: myTask) => {
        let tasks_list = [...category!.tasks];
        let index = tasks_list.findIndex(function(ta) {
            return ta.id === task.id;
        })
        tasks_list.splice(index, 1);
        category.tasks = tasks_list;
        doUpdate(category);
    } 

    let TaskUpdate = (task: myTask) => {
        let tasks_list = [...category!.tasks];
        let tas = tasks_list.find(function(ta) {
            return ta.id === task.id;
        })
        tas = task;
        category.tasks = tasks_list;
        doUpdate(category);
    }

    let displayForm = () => {
        category!.showAddForm = !category!.showAddForm;
        doUpdate(category);
    }

    return (
        <div className="category-div">
            <div className="category-title">
                <h1>{category.name}</h1>
                <button className="category-delete" onClick={() => onDelete(category)}><i className="fas fa-trash-alt"></i></button>
            </div>
            <div className="tasks-list">
                {category.tasks.map((task) => {
                    return (<Task task={task}  doDelete={TaskDelete} doUpdate={TaskUpdate} />);
                })}
            </div>
            <button className="task-add" type="button" onClick={() => displayForm()}><i className="fas fa-plus-circle"></i></button>
            {category.showAddForm? <TaskForm onAdd={TaskAdd}/>: null}
        </div>
    );
}

export default Category;