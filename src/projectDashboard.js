import { createButtonClass, createButtonID } from "./modules/button";
import { createDivId } from "./modules/div";
import { createDivH2 } from "./modules/header";
import { getProjectList } from "./projectList";
import { createDialog } from "./modules/dialog";
import { createProjectForm } from "./modules/form";


export function createProjectDashboard(){
    const projectDiv = createDivH2("your-project-container","dashboard-projects","Projects");
    const projectListDiv = createDivId("project-list");
    projectDiv.appendChild(projectListDiv);
    const projectList = getProjectList();
    projectList.forEach( (project)=>{
        const projectBtn = createButtonClass("project-button",project.title);
        projectListDiv.appendChild(projectBtn);
    });

    const addProjBtn = createButtonID("add-project-btn","Add a Project");
    projectDiv.appendChild(addProjBtn);
    
    return projectDiv;
}

export function updateProjectToDashboard(){
    const addProjBtn = document.querySelector("#add-project-btn");
    const content = document.querySelector("#content-container");

    addProjBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        const dialog = createDialog("Enter Project Information");
        const form = createProjectForm();

        dialog.appendChild(form);
        content.appendChild(dialog);
        dialog.showModal();

        form.addEventListener("submit",(event)=>{
            event.preventDefault();
            const projectTitle = form.querySelector("#projectName").value;

            const projectListDiv = document.querySelector("#project-list");

            const button = createButtonClass("project-button");
            button.textContent = projectTitle;
            
            projectListDiv.appendChild(button);

            form.querySelector("#projectName").value = "";
            dialog.close();
        })
        
    });
}