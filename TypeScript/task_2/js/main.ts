// Interface pour les enseignants
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Interface pour les directeurs qui étend Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface pour les méthodes des directeurs
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface pour les méthodes des enseignants
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classe Director implémentant les méthodes nécessaires
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Classe Teacher implémentant les méthodes nécessaires
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Fonction pour créer un employé
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Fonction pour vérifier si un employé est un directeur
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction pour exécuter le travail d'un employé
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Exemples d'utilisation
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
