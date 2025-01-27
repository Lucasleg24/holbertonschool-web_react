// Teacher interface definition
interface Teacher {
    // Required properties that can only be set during initialization
    readonly firstName: string;
    readonly lastName: string;
    
    // Other required properties
    fullTimeEmployee: boolean;
    location: string;
    
    // Optional property
    yearsOfExperience?: number;
    
    // Index signature to allow dynamic properties
    [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
    // Additional required property for directors
    numberOfReports: number;
}

// Interface for the printTeacher function
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementation of printTeacher function
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example of using Teacher interface
const teacher1: Teacher = {
    firstName: "Marie",
    lastName: "Dupont",
    fullTimeEmployee: true,
    location: "Paris",
    yearsOfExperience: 5,
    contract: true  // Added dynamic property
};

const teacher2: Teacher = {
    firstName: "Jean",
    lastName: "Martin",
    fullTimeEmployee: false,
    location: "Lyon",
    speciality: "Math",  // Another dynamic property
    contractType: "Fixed-term"  // Yet another dynamic property
};

// Example of using Directors interface
const director1: Directors = {
    firstName: "Sophie",
    lastName: "Laurent",
    fullTimeEmployee: true,
    location: "Paris",
    numberOfReports: 5,
    yearsOfExperience: 10,
    department: "Sciences"  // Dynamic property
};

// Function to display teacher information
function displayTeacherInfo(teacher: Teacher): void {
    console.log(`
        Name: ${teacher.firstName} ${teacher.lastName}
        Full-time Employee: ${teacher.fullTimeEmployee}
        Location: ${teacher.location}
        ${teacher.yearsOfExperience ? 'Years of Experience: ' + teacher.yearsOfExperience : ''}
    `);
    
    // Define base interface properties
    const baseProperties: (keyof Teacher)[] = ['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'];
    
    // Display dynamic properties
    Object.keys(teacher).forEach((key) => {
        if (baseProperties.indexOf(key as keyof Teacher) === -1) {
            console.log(`${key}: ${teacher[key]}`);
        }
    });
}

// Testing objects
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);
displayTeacherInfo(director1); // Works with director as Directors extends Teacher

// Testing printTeacher function
console.log(printTeacher("John", "Doe")); // Displays: J. Doe
console.log(printTeacher("Marie", "Dupont")); // Displays: M. Dupont