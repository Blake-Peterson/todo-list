import { createButtonClass, createButtonID } from "./modules/button";
import { createDivId } from "./modules/div";
import { createDivH2 } from "./modules/header";
import { addProjectToList, getProjectList } from "./projectList";
import { createDialog } from "./modules/dialog";
import { createProjectForm } from "./modules/form";
import { Project } from "./Project";


const projectListDiv = createDivId("project-list");

export function renderProjectDashboard(){
    const projectDiv = createDivH2("your-project-container","dashboard-projects","Projects");

    projectDiv.appendChild(projectListDiv);
    addProjectsToProjectListDiv();
    const addProjBtn = createButtonID("add-project-btn","Add a Project");
    addProjBtn.addEventListener("click",()=>{
        updateProjectListDiv();
    });
    projectDiv.appendChild(addProjBtn);
    
    return projectDiv;
}

function updateProjectListDiv(){
    clearProjectListDiv();
    addProjectToProjectList();
    addProjectsToProjectListDiv(projectListDiv);
    console.log(getProjectList());
}

function clearProjectListDiv(){
    const projectListDiv = document.querySelector("#project-list"); 
    while(projectListDiv.firstElementChild){
        projectListDiv.removeChild(projectListDiv.firstElementChild);
    }
}

function addProjectsToProjectListDiv(){
    const projectList = getProjectList();
    projectList.forEach( (project)=>{
        const projectBtn = createButtonClass("project-button",project.title);
        projectBtn.addEventListener("click",()=>{
            document.querySelector("#header-banner").textContent = `${project.title}: Todos`;
        }); 
        projectListDiv.appendChild(projectBtn);
    });
}

function addProjectToProjectList(){
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

            addProjectToList(new Project(projectTitle,[]));
            /*
            const button = createButtonClass("project-button");
            button.textContent = projectTitle;
            button.addEventListener("clicK",()=>{
                addProjectsToProjectListDiv();

            });
            
            projectListDiv.appendChild(button);
            */
           

            form.querySelector("#projectName").value = "";
            dialog.close();
        })
    });
    updateProjectListDiv();
}

