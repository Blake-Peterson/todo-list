import { createButtonClass, createButtonID } from "./modules/button";
import { createDivId } from "./modules/div";
import { createDivH2 } from "./modules/header";
import { getProjectList } from "./projectList";


export function createProjectDashboard(){
    const projectDiv = createDivH2("your-project-container","Your Projects","Your Projects");
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