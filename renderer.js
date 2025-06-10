let button = document.getElementById('get_start-btn')
console.log("btn", button)
button.addEventListener('click', () => {
    // Code to execute when the button is clicked
    console.log('Button Clicked!');
    // Example: Send a message to the main process
    window.electronAPI.sendMessage('button-clicked', 'Button was clicked!');
});