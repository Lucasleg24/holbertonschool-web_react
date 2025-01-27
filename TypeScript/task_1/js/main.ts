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

// Interface for the StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implementation of printTeacher function
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
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

// Implementation of StudentClass
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

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

// Testing objects
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);
displayTeacherInfo(director1); // Works with director as Directors extends Teacher

// Testing printTeacher function
console.log(printTeacher("John", "Doe")); // Displays: J. Doe
console.log(printTeacher("Marie", "Dupont")); // Displays: M. Dupont

// Testing StudentClass
const student1 = new StudentClass("Alice", "Lemoine");
console.log(student1.displayName()); // Displays: Alice
console.log(student1.workOnHomework()); // Displays: Currently working
