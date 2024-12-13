
function changeFontSize() {
    const textElement = document.getElementById('previewText');
    
    // Toggle between the two classes
    if (textElement.classList.contains('small-text')) {
        textElement.classList.remove('small-text');
        textElement.classList.add('large-text');
    } else {
        textElement.classList.remove('large-text');
        textElement.classList.add('small-text');
    }
}