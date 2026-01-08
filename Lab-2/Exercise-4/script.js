const form = document.getElementById('regForm');
const tableBody = document.querySelector('#userTable tbody');
const clearBtn = document.getElementById('clearBtn');
function validateMobile(mobile) { return /^\d{10}$/.test(mobile); }
function validatePassword(pwd) { return pwd.length >= 6; }
function loadUsers() {
tableBody.innerHTML = '';
const users = JSON.parse(localStorage.getItem('users')) || [];
users.forEach((user, index) => {
const row = tableBody.insertRow();
row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.mobile}</td><td><button onclick="deleteUser(${index})">Delete</button></td>`;
});
}
form.onsubmit = (e) => {
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const mobile = document.getElementById('mobile').value;
const password = document.getElementById('password').value;
if (!validateMobile(mobile)) { alert('Mobile must be 10 digits'); return; }
if (!validatePassword(password)) { alert('Password min 6 chars'); return; }
const users = JSON.parse(localStorage.getItem('users')) || [];
if (users.find(u => u.email === email)) { alert('Duplicate email'); return; }
users.push({name, email, mobile, password});
localStorage.setItem('users', JSON.stringify(users));
form.reset();
loadUsers();
};
clearBtn.onclick = () => {
localStorage.removeItem('users');
loadUsers();
};
function deleteUser(index) {
const users = JSON.parse(localStorage.getItem('users'));
users.splice(index, 1);
localStorage.setItem('users', JSON.stringify(users));
loadUsers();
}
loadUsers();
