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
        for(let i =0;i<this.todoList.length;i++){
            if(todo == this.todoList[i]){
                this.todoList.splice(i,1);
            }
        }
    }
    
}