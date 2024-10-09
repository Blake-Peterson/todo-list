import { createDivId } from "./modules/div";
import {createButtonID} from "./modules/button";
import {createH2Id} from "./modules/header";
import { Project } from "./Project";
import { Todo } from "./Todo";
import { getCurrentProject } from "./projectList";


export function createContent(){
    const contentDiv = createDivId("content-container");

    const projHeader = createH2Id("project-title",getCurrentProject().title);
    contentDiv.appendChild(projHeader);

    const todoList = createDivId("project-todo-list");
    contentDiv.appendChild(todoList);

    const addTodoBtn = createButtonID("add-todo-button","Add a Todo");
    contentDiv.appendChild(addTodoBtn);

    return contentDiv;
}