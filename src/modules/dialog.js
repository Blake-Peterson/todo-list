export function createDialog(dialog_text){
    const dialog = document.createElement("dialog");
    dialog.textContent=dialog_text;

    return dialog;
}

