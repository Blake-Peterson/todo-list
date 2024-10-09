export function createButtonID(btn_id_name,btn_text){
    const btn = document.createElement("button");
    btn.setAttribute("id",btn_id_name);
    btn.textContent=btn_text;
    return btn;
}

export function createButtonClass(btn_class_name,btn_text){
    const btn = document.createElement("button");
    btn.classList.add(btn_class_name);
    btn.textContent=btn_text;
    return btn;
}