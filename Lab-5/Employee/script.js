function fetchEmployeeData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.xml", true);
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const xmlDoc = this.responseXML;
            const employees = xmlDoc.getElementsByTagName("employee");
            let tableContent = "";

            for (let i = 0; i < employees.length; i++) {
                tableContent += `<tr>
                    <td>${employees[i].getElementsByTagName("id")[0].textContent}</td>
                    <td>${employees[i].getElementsByTagName("name")[0].textContent}</td>
                    <td>${employees[i].getElementsByTagName("dept")[0].textContent}</td>
                    <td>${employees[i].getElementsByTagName("salary")[0].textContent}</td>
                    <td><button onclick="removeEmployee(this)">Delete</button></td>
                </tr>`;
            }
            document.querySelector("#employeeTable tbody").innerHTML = tableContent;
            document.getElementById("statusMsg").innerText = "Data loaded successfully.";
        }
    };
    xhr.send();
}

function removeEmployee(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    document.getElementById("statusMsg").innerText = "Employee node removed.";
}