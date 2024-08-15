document.getElementById('submit-code').addEventListener('click', async () => {
    const code = document.getElementById('code-input').value;
    const response = await fetch('/api/submit-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
    });
    const result = await response.json();
    document.getElementById('output').innerText = result.message;
});
