import {Todo} from "./Todo";

export class Project{
    constructor(title,todoList){
        this.title = title;
        this.todoList = [];
    }

    addTodo(todo){
        if(todo instanceof Todo){
            this.todoList.push(todo);
        }
    }

    removeTodo(todo){
        //TODO:
    }
    
}