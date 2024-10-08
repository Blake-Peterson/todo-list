import {Project} from "./Project.js";
import {Todo} from "./Todo.js";

const projectList = [(new Project("Default Project",[]))]; 
const todo = new Todo("Add more Todos","More cards","2024-12-31","Medium");
projectList[0].addTodo(todo);

export function getProjectList(){
 
    return projectList;
}
