const input = document.getElementById('username');
const feedback = document.getElementById('feedback');
const loader = document.getElementById('loader');
const submitBtn = document.getElementById('submitBtn');

input.addEventListener('input', () => {
    const val = input.value;
    if (val.length === 0) {
        feedback.innerText = "";
        return;
    }
    loader.style.display = 'block';
    fetch('users.json')
        .then(res => res.json())
        .then(users => {
            loader.style.display = 'none';
            if (users.includes(val)) {
                feedback.innerText = "Username already taken";
                feedback.style.color = "red";
                submitBtn.disabled = true;
            } else {
                feedback.innerText = "Username available";
                feedback.style.color = "green";
                submitBtn.disabled = false;
            }
        });
});