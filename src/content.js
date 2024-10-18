import { createDivId } from "./modules/div";
import {createButtonID} from "./modules/button";
import {createH2Id} from "./modules/header";
import { Project } from "./Project";
import { Todo } from "./Todo";
import { getCurrentProject } from "./projectList";
import { createDialog } from "./modules/dialog";
import { createContentForm } from "./modules/form";
import { createTodoCard } from "./todoCard";


export function createContent(){
    const contentDiv = createDivId("content-container");

    const projHeader = createH2Id("project-title","");//getCurrentProject().title);
    contentDiv.appendChild(projHeader);

    const todoList = createDivId("project-todo-list");
    contentDiv.appendChild(todoList);

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
            const todoName = form.querySelector("#todoName").value;
            const description = form.querySelector("#todoDescription");
            const dueDate = form.querySelector("#todoDueDate");
            const priority = form.querySelector("#todoPriority");

            const currentProject = getCurrentProject();
            currentProject.addTodo(new Todo(todoName,description,dueDate,priority));

            dialog.close();
        })
    });
    contentDiv.appendChild(addTodoBtn);

    return contentDiv;
}


export function updateTodosToContent(){
    const todoListDiv = document.querySelector("#project-todo-list");
    const currentProject = getCurrentProject();

    currentProject.todoList.forEach(todo =>{
        const card = createTodoCard(todo);
        document.querySelector("#project-todo-list").appendChild(card);
    });
 
}