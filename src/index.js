import "./styles/style.css";
import {Project} from "./Project.js";
import {Todo} from "./Todo.js";
import { getCurrentProject, getProjectList } from "./projectList.js";
import { createDivH2, createH2Id } from "./modules/header.js";
import { createContent } from "./content.js";
import { createProjectDashboard, updateProjectToDashboard } from "./projectDashboard.js";

const container = document.querySelector("#container");


function main(){
    const project = getCurrentProject();

    const header = createDivH2("header","header-banner",`${getCurrentProject().title}: Todos`);
    container.appendChild(header);

    const dashboard = createProjectDashboard();
    container.appendChild(dashboard);

    const content = createContent();
    container.appendChild(content);

    updateProjectToDashboard();

    //updateTodosToContent();
    console.log(getProjectList());
}

main();