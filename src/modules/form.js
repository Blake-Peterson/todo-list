import { createButtonID } from "./button";
import { createLabelInputDiv } from "./div";
import { createSubmitInput } from "./input";
import { createLabel } from "./label.js";
import { createInput } from "./input.js";
import { createTextArea } from "./textArea.js";
import { createSelect } from "./select.js";

export function createProjectForm(){
    const form = document.createElement("form");
    form.setAttribute("id","project-list-form");

    //label input
    const div = createLabelInputDiv(createLabel("projectName","New Project"),createInput("text","projectName"));
    form.appendChild(div);

    const submitInput = createSubmitInput();
    form.appendChild(submitInput);
    return form;
}

export function createContentForm(){
    const form = document.createElement("form");
    form.setAttribute("id","todo-list-form");

    const todoNameDiv = createLabelInputDiv(createLabel("todoName","Todo Name"),createInput("text","todoName"));
    form.appendChild(todoNameDiv);

    const descriptionDiv = createLabelInputDiv(createLabel("todoDescription","Description"),createTextArea("textarea","todoDescription","4","50"));
    form.appendChild(descriptionDiv);

    const dueDateDiv = createLabelInputDiv(createLabel("todoDueDate","Due Date"),createInput("date","todoDDueDate"));
    form.appendChild(dueDateDiv);

    const priorityList = ["Low","Medium","High","Critical"];
    const priorityDiv = createLabelInputDiv(createLabel("todoPriority","Priority"),createSelect("todoPriority",priorityList));
    form.appendChild(priorityDiv);

    const submitInput = createSubmitInput();
    form.appendChild(submitInput);

    return form;
}