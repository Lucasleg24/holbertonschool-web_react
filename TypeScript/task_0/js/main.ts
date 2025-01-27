// Définition de l'interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Création des deux étudiants
const student1: Student = {
    firstName: "Jean",
    lastName: "Dupont",
    age: 20,
    location: "Paris"
};

const student2: Student = {
    firstName: "Marie",
    lastName: "Martin",
    age: 22,
    location: "Lyon"
};

// Création du tableau d'étudiants
const studentsList: Student[] = [student1, student2];

// Fonction pour créer et afficher la table
function renderTable(): void {
    // Création des éléments HTML
    const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
    const table: HTMLTableElement = document.createElement("table");
    const thead: HTMLTableSectionElement = document.createElement("thead");
    const tbody: HTMLTableSectionElement = document.createElement("tbody");

    // Création de l'en-tête du tableau
    const headerRow: HTMLTableRowElement = document.createElement("tr");
    const firstNameHeader: HTMLTableCellElement = document.createElement("th");
    const locationHeader: HTMLTableCellElement = document.createElement("th");

    firstNameHeader.textContent = "Prénom";
    locationHeader.textContent = "Localisation";

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Ajout des données des étudiants
    studentsList.forEach((student: Student) => {
        const row: HTMLTableRowElement = document.createElement("tr");
        const firstNameCell: HTMLTableCellElement = document.createElement("td");
        const locationCell: HTMLTableCellElement = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    body.appendChild(table);
}

// Appel de la fonction quand le document est chargé
document.addEventListener("DOMContentLoaded", renderTable);