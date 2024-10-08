import "./styles/style.css";
import {Project} from "./Project.js";
import {Todo} from "./Todo.js";
import { getProjectList } from "./projectList.js";
import { createH2Id } from "./modules/header.js";

const container = document.querySelector("#container");


function main(){
    const projectList = getProjectList();
    console.log(projectList);

    const header = createH2Id("header");

}

main();