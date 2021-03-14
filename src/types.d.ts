type myTask = {
    createdAt?: string;
    id?: string;
    title: string;
    description: string;
    isDone: boolean;
}

type myCategorie = {
    id: string;
    name: string;
    tasks: Array<myTask>;
    showAddForm: boolean;
}

type onCDelete = (categorie: myCategorie) => void; 
type onCUpdate = (categorie: myCategorie) => void;
declare module 'react-modal';