document.addEventListener('mouseup', (event) => {
    const text = window.getSelection().toString().trim()

    if (text !== '') {
        navigator.clipboard.writeText(text)
    }
})