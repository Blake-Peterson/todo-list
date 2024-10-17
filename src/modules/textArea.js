export function createTextArea(textarea_id,textarea_name,rows, cols){
    const textArea = document.createElement("textarea");
    textArea.id = textarea_id;
    textArea.name = textarea_name;
    textArea.rows = rows;
    textArea.cols = cols;
    
    return textArea;
}