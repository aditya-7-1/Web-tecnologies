function allowDrop(e) { e.preventDefault(); }
function drag(e) { e.dataTransfer.setData('text', e.target.id); }
function drop(e) {
const id = e.dataTransfer.getData('text');
e.target.appendChild(document.getElementById(id));
if (e.target.id === 'completed') {
document.getElementById(id).classList.add('completed');
alert('Task Completed Successfully');
}
}
document.getElementById('addBtn').onclick = () => {
const input = document.getElementById('taskInput');
const task = document.createElement('div');
task.className = 'task';
task.draggable = true;
task.ondragstart = drag;
task.id = 'task' + Date.now();
task.innerHTML = input.value + '<br>' + new Date().toLocaleDateString();
document.getElementById('todo').appendChild(task);
input.value = '';
};
