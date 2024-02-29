let students = [];
  
function addStudent() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;

    if (name && gender && age) {
        const student = {
            id: students.length + 1,
            name: name,
            gender: gender,
            age: age
        };
        students.push(student);
        updateTable();
        clearInputs();
    } else {
        alert("Please fill in all fields.");
    }
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";
    students.forEach(student => {
        const row = `<tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.gender}</td>
                        <td>${student.age}</td>
                        <td><button onclick="deleteStudent(${student.id})">Delete</button></td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
}

console.log("Chaos!!!");