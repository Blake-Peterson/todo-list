export function createDivId(div_id_name){
    const div = document.createElement("div");
    div.setAttribute("id",div_id_name);
    return div;
};

export function createDivClass(div_class_name){
    const div = document.createElement("div");
    div.classList.add(div_class_name);
    return div;
};

export function createLabelInputDiv(label, input){
    const div = createDivClass("label-input-div");
    div.appendChild(label);
    div.appendChild(input);
    return div;
}
