export function createLabel(label_for,label_text){
    const label = document.createElement("label");
    label.setAttribute("for",label_for);
    label.textContent = label_text;
    return label;
}