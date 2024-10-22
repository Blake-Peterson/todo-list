import { createDivId } from "./modules/div";
import {createButtonID} from "./modules/button";
import {createH2Id} from "./modules/header";
import { Project } from "./Project";
import { Todo } from "./Todo";
import { getCurrentProject, getProjectList, getTodoList } from "./projectList";
import { createDialog } from "./modules/dialog";
import { createContentForm } from "./modules/form";
import { createTodoCard } from "./todoCard";

const todoListDiv = createDivId("project-todo-list");

export function createContent(){
    const contentDiv = createDivId("content-container");

    const projHeader = createH2Id("project-title","");
    contentDiv.appendChild(projHeader);
    
    contentDiv.appendChild(todoListDiv);
    updateTodosToContent(getCurrentProject());

    const addTodoBtn = createButtonID("add-todo-button","Add a Todo");
    addTodoBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        const dialog = createDialog("Enter Todo Information");
        const form = createContentForm();

        dialog.appendChild(form);
        contentDiv.appendChild(dialog);
        dialog.showModal();

        form.addEventListener("submit",(event)=>{
            event.preventDefault();
            const todoName = form.elements["todoName"].value;
            const description = form.elements["todoDescription"].value;
            const dueDate = form.elements["todoDueDate"].value;
            const priority = form.elements["todoPriority"].value;

            const currentProject = getCurrentProject();
            const newTodo = new Todo(todoName,description,dueDate,priority);
            currentProject.addTodo(newTodo);

            dialog.close();
            console.log(getCurrentProject().todoList);
            removeTodosFromContent();
            updateTodosToContent(getCurrentProject());
        })
    });
    contentDiv.appendChild(addTodoBtn);

    return contentDiv;
}

export function updateSwitchProjectTodos(project){
    removeTodosFromContent();
    updateTodosToContent(project);
}

export function removeTodosFromContent(){
    while(todoListDiv.firstChild){
        todoListDiv.removeChild(todoListDiv.firstChild);
    }
}


export function updateTodosToContent(project){    
    const todos = project.todoList;
    todos.forEach(todo =>{
        const card = createTodoCard(todo);
        todoListDiv.appendChild(card);
    });
}