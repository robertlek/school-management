import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", {
  state: () => {
    return {
      courses: [
        {
          id: 1,
          name: "Object Oriented Programming",
          teacher: "Jeff Thomas",
          description:
            "This course introduces students to fundamental concepts and principles of modern software development. Through a combination of theoretical knowledge and hands-on programming exercises, students learn to design, implement, and maintain software systems using object-oriented methodologies.",
          studentsAttended: 450
        },
        {
          id: 2,
          name: "SOLID Principles",
          teacher: "Karl Thompson",
          description:
            "SOLID is a set of five design principles in object-oriented programming: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles guide developers in writing maintainable, scalable, and flexible software systems.",
          studentsAttended: 310
        },
        {
          id: 3,
          name: "Introduction to Git",
          teacher: "Yosef Jeremiah",
          description:
            "Git is a distributed version control system used for tracking changes in source code during software development. This course covers basic Git commands, branching, merging, and collaboration workflows, empowering developers to effectively manage and collaborate on projects.",
          studentsAttended: 250
        },
        {
          id: 4,
          name: "JavaScript Mastery",
          teacher: "Andrew Stepburn",
          description:
            "JavaScript Mastery course equips learners with advanced skills in JavaScript programming language. Topics include asynchronous programming, functional programming concepts, ES6 features, and modern JavaScript frameworks like React or Vue.js, enabling students to build dynamic and interactive web applications.",
          studentsAttended: 852
        },
        {
          id: 5,
          name: "Clean Code Architecture",
          teacher: "Mary-Ann Freensy",
          description:
            "Clean Code Architecture focuses on writing code that is readable, maintainable, and scalable. This course covers principles such as separation of concerns, dependency inversion, and test-driven development, guiding developers to create clean, modular, and easily understandable codebases for long-term success.",
          studentsAttended: 159
        }
      ]
    };
  },
  actions: {
    getAll() {
      return this.courses;
    },
    registerStudent(student: any) {
      fetch("https://localhost:44320/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });
    }
  }
});
