/*textarea 自适应高度*/
function autoResize(id) {
    const textArea = document.getElementById(id);
    textArea.style.height = "auto";
    textArea.style.height = (textArea.scrollHeight) + "px";
}

// textarea只能输入指定字符
function validateNumericInput(id,what) {
    const numericTextarea = document.getElementById(id);
    numericTextarea.value = numericTextarea.value.replace(what, ''); // 只保留数字
}