import React, { useState, FunctionComponent } from "react";

interface myProps {
    onAdd: any;
}

const CategoryForm: FunctionComponent<myProps> = ({onAdd}) => {

    const [cname, setCName] = useState('');

    let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCName(event.currentTarget.value);
    }

    return (
        <form onSubmit={(e) => {onAdd(e, cname); setCName('');}} className="category-form">
            <input value={cname} onChange={handleChange} placeholder="Nouvelle Categorie..."></input>
            <button className="new-category" type="submit"><i className="fas fa-plus-circle"></i></button>
        </form>
    );
}

export default CategoryForm;