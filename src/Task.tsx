import { TargetElement } from "@testing-library/user-event";
import React, {FunctionComponent, useState} from "react";
import Modal from 'react-modal';

interface myProps {
    task: myTask;
    doDelete: any;
    doUpdate: any;
}

const modalstyle = {
    content: {
        width: '500px',
        height: '200px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const Task: FunctionComponent<myProps> = ({task, doDelete, doUpdate}) => {

    const [content, setContent] = useState(task.title);
    const [desc, setDesc] = useState(task.description);
    const [modalIsOpen,setIsOpen] = useState(false);

    let handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.title = event.currentTarget.value;
        setContent(event.currentTarget.value);
    }

    let handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.description = event.currentTarget.value;
        setDesc(event.currentTarget.value);
    }

    let handleDone = () => {
        task.isDone = !task.isDone;
        doUpdate(task);
    }

    let openModal = () => {
        setIsOpen(true);
    }
     
    let closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-text">
                <input className="form-check-input" onClick={() => handleDone()} defaultChecked={task.isDone} type="checkbox" value=""  />
            </div>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <input disabled={task.isDone} className={task.isDone ? "form-control task task-done" : "form-control task task-normal"} onChange={handleChangeTitle} value={content} type="text"/>
            </form>
            <button onClick={openModal}><i className="fas fa-info-circle"></i></button>
            <button onClick={() => doDelete(task)}><i className="fas fa-trash-alt"></i></button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="task-modal">
                <ul>
                    <button onClick={closeModal}>x</button>
                    <li>Id: {task.id}</li>
                    <li>Title: {task.title}</li>
                    <li>Description: <input onChange={handleChangeDescription} value={desc}></input></li>
                    <li>Created: {task.createdAt}</li>
                    <li>isDone: {task.isDone ? "true": "false"}</li>
                </ul>
            </Modal>
        </div>
    );
}

export default Task;