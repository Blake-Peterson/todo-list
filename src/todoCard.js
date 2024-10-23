import { createButtonClass } from "./modules/button";
import { createDivClass, createDivId } from "./modules/div";
import { createH2Class } from "./modules/header";
import { getCurrentProject, removeTodoFromProjectList } from "./projectList";
import { Todo } from "./Todo";
import {removeTodosFromContent} from "./content.js";



export function createTodoCard(todo){
    const cardDiv = createDivClass("todo-card");
    const cardName = createH2Class("todo-card-title",todo.title);
    const dueDate = createH2Class("todo-card-due-date",todo.dueDate);
    const div = document.createElement("div");
    div.classList.add("card-header");
    div.appendChild(cardName);
    div.appendChild(dueDate);
    cardDiv.appendChild(div);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("todo-card-description");
    cardDescription.textContent = todo.description;
    cardDescription.style.display = "none";
    cardDiv.appendChild(cardDescription);

    const todoCardActionsDiv = createDivId("todo-card-actions");
    
    const editBtn = createButtonClass("todo-card-edit","Edit");
    editBtn.addEventListener("click",()=> handleEdit(cardDiv,todo,editBtn));
    todoCardActionsDiv.appendChild(editBtn);

    const doneBtn = createButtonClass("todo-card-done","Done");
    doneBtn.addEventListener("click", ()=>{
        console.log("clicked");
        removeTodosFromContent();
        removeTodoFromProjectList(todo);
        const project = getCurrentProject();
        project.todoList.forEach(project_todo =>{
            const card = createTodoCard(project_todo);
            document.querySelector("#project-todo-list").appendChild(card);
        });
    });
    todoCardActionsDiv.appendChild(doneBtn);

    updateTodoCardColor(cardDiv,todo);

    cardDiv.appendChild(todoCardActionsDiv);
    
    return cardDiv;
}

function updateTodoCardColor(cardDiv,todo){
    const priority = todo.priority;
    switch(priority){
        case "Critical":
            cardDiv.style.background = "red";
            break;
        case "High":
            cardDiv.style.background = "orange";
            break;
        case "Medium":
            cardDiv.style.background = "yellow";
            break;
        default:
            cardDiv.style.background = "green";
            break;
    }
}

function handleEdit(cardDiv, todo,editBtn){
    const isEditing = editBtn.textContent === "Edit";

    const title = cardDiv.querySelector(".todo-card-title");
    const dueDate = cardDiv.querySelector(".todo-card-due-date");
    const description = cardDiv.querySelector(".todo-card-description");

    if(isEditing){
        editBtn.textContent = "Save";
        
        title.contentEditable = "true";
        dueDate.contentEditable = "true";

        description.style.display = "block";
        description.contentEditable = "true";
    } else {
        editBtn.textContent = "Edit";

        todo.title = title.textContent;
        todo.dueDate = dueDate.textContent;
        todo.description = description.textContent;

        title.contentEditable = "false";
        dueDate.contentEditable = "false";
        description.contentEditable = "false";

    }
}
