export function createButtonID(btn_id_name){
    const btn = document.createElement("button");
    btn.setAttribute("id",btn_id_name);
    return btn;
}

export function createButtonClass(btn_class_name){
    const btn = document.createElement("button");
    btn.classList.add(btn_class_name);
    return btn;
}