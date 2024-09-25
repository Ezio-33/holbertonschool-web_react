// Définition de l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création de deux étudiants
const student1: Student = {
  firstName: "Jean",
  lastName: "Dupont",
  age: 20,
  location: "Paris",
};

const student2: Student = {
  firstName: "Marie",
  lastName: "Martin",
  age: 22,
  location: "Lyon",
};

const student3: Student = {
  firstName: "Boba",
  lastName: "Fett",
  age: 25,
  location: "Bordeaux",
};

// Création d'un tableau d'étudiants
const studentsList: Student[] = [student1, student2, student3];

console.log(student1);
console.log(student2);
console.log(student3);
console.log(studentsList);

// Fonction pour créer et afficher le tableau
function renderTable() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    ageCell.textContent = student.age.toString();
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Appel de la fonction pour afficher le tableau
renderTable();
