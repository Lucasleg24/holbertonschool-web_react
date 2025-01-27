// Définition de l'interface Teacher
interface Teacher {
    // Propriétés obligatoires qui ne peuvent être définies qu'à l'initialisation
    readonly firstName: string;
    readonly lastName: string;
    
    // Autres propriétés obligatoires
    fullTimeEmployee: boolean;
    location: string;
    
    // Propriété optionnelle
    yearsOfExperience?: number;
    
    // Index signature pour permettre l'ajout de propriétés dynamiques
    [key: string]: any;
}

// Exemple d'utilisation de l'interface
const teacher1: Teacher = {
    firstName: "Marie",
    lastName: "Dupont",
    fullTimeEmployee: true,
    location: "Paris",
    yearsOfExperience: 5,
    contract: true  // Propriété dynamique ajoutée
};

const teacher2: Teacher = {
    firstName: "Jean",
    lastName: "Martin",
    fullTimeEmployee: false,
    location: "Lyon",
    speciality: "Math",  // Une autre propriété dynamique
    contratType: "CDD"   // Encore une autre propriété dynamique
};

// Fonction pour afficher les informations d'un professeur
function displayTeacherInfo(teacher: Teacher): void {
    console.log(`
        Nom: ${teacher.firstName} ${teacher.lastName}
        Employé à temps plein: ${teacher.fullTimeEmployee}
        Localisation: ${teacher.location}
        ${teacher.yearsOfExperience ? 'Années d\'expérience: ' + teacher.yearsOfExperience : ''}
    `);

    // Définir les propriétés de base de l'interface
    const baseProperties: (keyof Teacher)[] = ['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'];

    // Afficher les propriétés dynamiques
    Object.keys(teacher).forEach((key) => {
        if (baseProperties.indexOf(key as keyof Teacher) === -1) {
            console.log(`${key}: ${teacher[key]}`);
        }
    });
}

// Test des objets
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);