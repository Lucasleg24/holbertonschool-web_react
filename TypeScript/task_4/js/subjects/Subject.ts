namespace Subjects {
  export class Subject {
    // Attribut : un enseignant qui implémente l'interface Teacher
    teacher: Teacher;

    // Méthode setter pour définir l'enseignant
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
