import {Project} from "./Project.js";
import {Todo} from "./Todo.js";

const projectList = [(new Project("Default Project",[]))]; 
const todos = [
    new Todo("Add no Todos","No cards","2024-12-31","Low"),
    new Todo("Add a few Todos","Few cards","2024-12-31","Medium"),
    new Todo("Add more Todos","More cards","2024-12-31","High"),
    new Todo("Add lots Todos","Tons cards","2024-12-31","Critical"),
];
for(let i=0;i<todos.length;i++){
    projectList[0].addTodo(todos[i]);
}

export function getProjectList(){
    return projectList;
}

export function getCurrentProject(){
    console.log(projectList[0]);
    return projectList[0];
}