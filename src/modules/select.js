export function createSelect(select_id, optionList){
    const select = document.createElement("select");
    select.id = select_id;
    optionList.forEach( (optionItem)=>{
        const option = document.createElement("option");
        option.value = optionItem;
        option.textContent = optionItem;
        select.appendChild(option);
    });
    return select;
}