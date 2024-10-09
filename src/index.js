import "./styles/style.css";
import {Project} from "./Project.js";
import {Todo} from "./Todo.js";
import { getCurrentProject, getProjectList } from "./projectList.js";
import { createDivH2, createH2Id } from "./modules/header.js";
import { createContent } from "./content.js";

const container = document.querySelector("#container");


function main(){
    const project = getCurrentProject();
    console.log(project);

    const header = createDivH2("header","header-banner","Welcome to your Todo Lists");
    container.appendChild(header);

    const content = createContent();
    container.appendChild(content);

}

main();