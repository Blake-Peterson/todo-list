import { createButtonID } from "./button";
import { createLabelInputDiv } from "./div";
import { createSubmitInput } from "./input";
import { createLabel } from "./label.js";
import { createInput } from "./input.js";

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


    const submitInput = createSubmitInput();
    form.appendChild(submitInput);

    return form;
}