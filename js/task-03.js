
const inputEl = document.querySelector('#name-input');

    inputEl.addEventListener('input', function () {
        const enteredName = this.value.trim();
        const outputEl = document.querySelector('#name-output');
        outputEl.textContent = enteredName || 'Anonymous';
    });
