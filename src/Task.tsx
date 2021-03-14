import React, {FunctionComponent, useState} from "react";
import Modal from 'react-modal';

interface myProps {
    task: myTask;
    doDelete: onTDelete;
    doUpdate: onTUpdate;
}

Modal.setAppElement('#root');

const Task: FunctionComponent<myProps> = ({task, doDelete, doUpdate}) => {

    const [modalIsOpen,setIsOpen] = useState(false);

    let handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.title = event.currentTarget.value;
        doUpdate(task);
    }

    let handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.description = event.currentTarget.value;
        doUpdate(task);
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
                <input className="form-check-input" checked={task.isDone} onChange={() => handleDone()} type="checkbox"  />
            </div>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <input disabled={task.isDone} className={task.isDone ? "form-control task task-done" : "form-control task task-normal"} onChange={handleChangeTitle} value={task.title} type="text"/>
            </form>
            <button onClick={openModal}><i className="fas fa-info-circle"></i></button>
            <button onClick={() => doDelete(task)}><i className="fas fa-trash-alt"></i></button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="task-modal">
                <ul>
                    <button onClick={closeModal}>x</button>
                    <li>Id: {task.id}</li>
                    <li>Title: {task.title}</li>
                    <li>Description: <input onChange={handleChangeDescription} value={task.description}></input></li>
                    <li>Created: {task.createdAt}</li>
                    <li>isDone: {task.isDone ? "true": "false"}</li>
                </ul>
            </Modal>
        </div>
    );
}

export default Task;