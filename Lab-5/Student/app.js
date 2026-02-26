// Exercise 3: Fetch Students
fetch('students.json')
    .then(response => {
        if (!response.ok) throw new Error("JSON fetch failed");
        return response.json();
    })
    .then(data => {
        const tbody = document.querySelector("#studentTable tbody");
        data.forEach(student => {
            const row = `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.marks}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    })
    .catch(error => console.error("Error:", error));

// Exercise 4: Simple Inventory Logic (Simulated Data)
const inventory = [
    {"id": "P1", "name": "Laptop", "price": 45000, "stock": 2},
    {"id": "P2", "name": "Mouse", "price": 500, "stock": 10}
];

let totalValue = 0;
const listDiv = document.getElementById("inventoryList");

inventory.forEach(item => {
    totalValue += (item.price * item.stock);
    const p = document.createElement("p");
    
    // Low stock warning (Conditional Formatting)
    if(item.stock < 5) {
        p.style.color = "red";
        p.innerText = `${item.name} - LOW STOCK: ${item.stock}`;
    } else {
        p.innerText = `${item.name} - Stock: ${item.stock}`;
    }
    listDiv.appendChild(p);
});

document.getElementById("totalDisplay").innerText = "Total Inventory Value: " + totalValue;