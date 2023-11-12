function autoResize(id) {
    const textArea = document.getElementById(id);
    textArea.style.height = "auto";
    textArea.style.height = (textArea.scrollHeight) + "px";
}
