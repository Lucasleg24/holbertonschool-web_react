namespace Subjects {
  export class Subject {
      teacher: Teacher;

      constructor(teacher: Teacher) {
          this.teacher = teacher;
      }

      setTeacher(teacher: Teacher) {
          this.teacher = teacher;
      }

      getTeacher(): Teacher {
          return this.teacher;
      }
  }
}