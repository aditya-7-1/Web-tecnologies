function addStudent() {
    const id = document.getElementById('sId').value;
    const name = document.getElementById('sName').value;
    const dept = document.getElementById('sDept').value;
    const marks = document.getElementById('sMarks').value;

    if(!id || !name) return;

    const tbody = document.querySelector('#studentTable tbody');
    const row = tbody.insertRow();
    row.innerHTML = `<td>${id}</td><td>${name}</td><td>${dept}</td><td>${marks}</td>
                    <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>`;
    
    document.getElementById('msg').innerText = "Record Added Successfully";
    document.getElementById('studentForm').reset();
}