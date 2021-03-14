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
type onCAdd = (event: React.FormEvent<EventTarget>, cname: string) => void;
type onTDelete = (task: myTask) => void;
type onTUpdate = (task: myTask) => void;
type onTAdd = (event: React.FormEvent<EventTarget>, task: myTask) => void;
declare module 'react-modal';