import { createButtonClass } from "./modules/button";
import { createDivClass } from "./modules/div";
import { createH2Class } from "./modules/header";
import { Todo } from "./Todo";

export function createTodoCard(todo){
    const cardDiv = createDivClass("todo-card");
    const cardName = createH2Class("todo-card-title",todo.title);
    const dueDate = createH2Class("todo-card-due-date",todo.dueDate);
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(dueDate);

    const button = createButtonClass("todo-card-done","Done");
    cardDiv.appendChild(button);
    
    return cardDiv;
}