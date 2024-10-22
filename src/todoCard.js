import { createButtonClass } from "./modules/button";
import { createDivClass, createDivId } from "./modules/div";
import { createH2Class } from "./modules/header";
import { getCurrentProject } from "./projectList";
import { Todo } from "./Todo";

export function createTodoCard(todo){
    const cardDiv = createDivClass("todo-card");
    const cardName = createH2Class("todo-card-title",todo.title);
    const dueDate = createH2Class("todo-card-due-date",todo.dueDate);
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(dueDate);

    const todoCardActionsDiv = createDivId("todo-card-actions");
    
    const expandBtn = createButtonClass("todo-card-expand","Expand");

    todoCardActionsDiv.appendChild(expandBtn);

    const doneBtn = createButtonClass("todo-card-done","Done");

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
