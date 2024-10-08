export function createUnorderedList(list){
    const ul = document.createElement("ul");
    for(let i=0;i<list.lenght;i++){
        const li =document.createElement("li");
        li.textContent = list[i];
        ul.appendChild(li);
    }
    return ul;
}