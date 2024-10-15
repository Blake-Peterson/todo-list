export function createInput(input_type,input_id){
    const input = document.createElement("input");
    input.type = input_type;
    input.id = input_id;
    input.value = "";
    return input;
}

export function createSubmitInput(){
    const input = document.createElement("input");
    input.type = "submit";
    input.value = "Submit";
    return input;
}