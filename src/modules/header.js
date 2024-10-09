import { createDivId } from "./div";

export function createDivH2(div_id_name,id_name,h2Text){
    const div = createDivId(div_id_name);
    const h2 = createDivId(id_name,h2Text);
    div.appendChild(h2);
}

export function createH2Id(id_name,h2Text){
    const header = document.createElement("h2");
    header.setAttribute("id",id_name);
    header.textContent = h2Text;
    return header;
}

export function createH2Class(class_name,h2Text){
    const header = document.createElement("h2");
    header.classList.add(class_name);
    header.textContent = h2Text;
    return header;
}