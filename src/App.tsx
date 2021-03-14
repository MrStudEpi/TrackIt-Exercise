import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid-random';
import Category from "./Category";
import CategoryForm from "./form/CategoryForm";

function App() {

    const todo_project_tasks: Array<myTask> = [
        {title: 'MyDefender', description: 'Reproduire un Tower Defense', createdAt: new Date().toLocaleDateString().toString(), id: uuid(), isDone: false},
        {title: 'Matchstick', description: 'Reproduire le jeu des allumettes', createdAt: new Date().toLocaleDateString().toString(), id: uuid(), isDone: true},
        {title: 'Antman', description: 'Le Projet impossible', createdAt: new Date().toLocaleDateString().toString(), id: uuid(), isDone: true}
    ];
    const [categories, setCategories] = useState([
        {id: uuid(), name: 'Projet(s)', tasks: todo_project_tasks, showAddForm: false},
        {id: uuid(), name: 'Autres', tasks: new Array<myTask>(), showAddForm: false}
    ]);

    let handleUpdateCategory = (category: myCategorie) => {
        const category_list: Array<myCategorie> = [...categories];
        let fcat = category_list.find(function(cat) {
            return cat.id === category.id;
        })
        if (typeof(fcat) === undefined)
            return;
        fcat = category;
        setCategories(category_list);
    }

    let handleNewCategory = (event: React.FormEvent<EventTarget>, cname: string) => {
        event.preventDefault();
        if (cname.length <= 0 || cname.length <= 0)
            return 0;
        const category_list: Array<myCategorie> = [...categories];
        category_list.push({
            name: cname,
            showAddForm: false,
            tasks: new Array<myTask>(),
            id: uuid()
        });
        setCategories(category_list);
    }

    let handleDeleteCategory = (category: myCategorie) => {
        const category_list = [...categories];
        let index = category_list.findIndex(function(cat) {
            return cat.id === category.id;
        })
        category_list.splice(index, 1);
        setCategories(category_list);
    }

    return (
    <div className="App">
        <h1 className="title">TrackIt.io - @TodoList</h1>
        <CategoryForm onAdd={handleNewCategory}/>
        <div className="categories-div">
            {categories.map((category) => {
                if (category.name === '')
                    return false;
                return (<Category category={category} onDelete={handleDeleteCategory} doUpdate={handleUpdateCategory}/>);
            })}
        </div>
    </div>
  );
}

export default App;
