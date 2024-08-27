document.getElementById('votingForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const regNumber = document.getElementById('regNumber').value;
    const president = document.querySelector('input[name="president"]:checked')?.value;
    const vicePresident = document.querySelector('input[name="vicePresident"]:checked')?.value;
    const secretary = document.querySelector('input[name="secretary"]:checked')?.value;
    const position4 = document.querySelector('input[name="position4"]:checked')?.value;
    const position5 = document.querySelector('input[name="position5"]:checked')?.value;

    // Check if all required positions are selected
    if (!president || !vicePresident || !secretary || !position4 || !position5) {
        document.getElementById('message').textContent = 'Please select a candidate for all positions.';
        document.getElementById('message').style.color = 'red';
        return;
    }

    const response = await fetch('https://script.google.com/macros/s/AKfycbxFDmRwKi16zIJLReYn8anMSqJx8ofUw5WdZhrCIyL_Fud-uwEIHr89W8dFg_xh3ez-4g/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            regNumber,
            president,
            vicePresident,
            secretary,
            position4,
            position5
        })
    });

    const result = await response.json();
    document.getElementById('message').textContent = result.message;
    document.getElementById('message').style.color = result.success ? 'green' : 'red';
});
