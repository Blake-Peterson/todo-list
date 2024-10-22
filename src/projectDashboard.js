import { createButtonClass, createButtonID } from "./modules/button";
import { createDivId } from "./modules/div";
import { createDivH2 } from "./modules/header";
import { addProjectToList, getCurrentProject, getProjectList } from "./projectList";
import { createDialog } from "./modules/dialog";
import { createProjectForm } from "./modules/form";
import { Project } from "./Project";
import { updateSwitchProjectTodos } from "./content";



const projectListDiv = createDivId("project-list");

export function renderProjectDashboard(){
    const projectDiv = createDivH2("your-project-container","dashboard-projects","Projects");

    projectDiv.appendChild(projectListDiv);
    const addProjBtn = createButtonID("add-project-btn","Add a Project");
    addProjectButtonsToProjectListDiv();
    addProjBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        clearProjectListDiv();
        const dialog = createDialog("Enter Project Information");
        const form = createProjectForm();

        dialog.appendChild(form);
        projectDiv.appendChild(dialog);
        dialog.showModal();

        form.addEventListener("submit",(event)=>{
            event.preventDefault();
            const projectTitle = form.querySelector("#projectName").value;

            addProjectToList(new Project(projectTitle,[]));
            const projectBtn = createButtonClass("project-button");
            projectBtn.textContent = projectTitle;
            addProjectButtonsToProjectListDiv();
                                   
            form.querySelector("#projectName").value = "";
            dialog.close();
        });
    });

    projectDiv.appendChild(addProjBtn);
    
    return projectDiv;
}

function clearProjectListDiv(){
    const projectListDiv = document.querySelector("#project-list"); 
    while(projectListDiv.firstElementChild){
        projectListDiv.removeChild(projectListDiv.firstElementChild);
    }
}

function addProjectButtonsToProjectListDiv(){
    const projectList = getProjectList();
    projectList.forEach( (project)=>{
        const projectBtn = createButtonClass("project-button",project.title);
        projectBtn.addEventListener("click",()=>{
            document.querySelector("#header-banner").textContent = `${project.title}: Todos`;
            if(projectList.length>1){
                updateSwitchProjectTodos(project);
            }
        }); 
        projectListDiv.appendChild(projectBtn);
    });
}



