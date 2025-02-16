//задание 1

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    checkYear() {
        return Number.isInteger(this.year) && this.year > 0;
    }

    getDescription() {
        return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`;
    }
}
const myBook = new Book("Война и мир", "Лев Толстой", 1869);

if (myBook.checkYear()) {
    console.log(myBook.getDescription()); // Название: Война и мир, Автор: Лев Толстой, Год: 1869
}


//задание 2

//function gradeAverage(){
   // if(this.grades.length == 0){
   //     return 'нет оценок';
  //  }
  //  let sum = 0;
    //let gradesLen = grades.length

  //  for (g of this.grades){
  //      sum += g;
  //  }

  //  return `средняя оценка ${sum/gradesLen}`;
//}

//const s1 = new Student("Анна", 20)
//s1.addGrade(5)
//s1.addGrade(5)
//s1.addGrade(4)
//s1.addGrade(3)
//s1.addGrade(5)

//console.log(s1)

//console.log(gradeAverage())

//задание 3

class GoodStudent extends Student {
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade
    }

    addGrade(){
        if(this.grade < 0 && this.grade < 5){
            this.grade++;
            console.log(this.grade)
        }
        else {
class GoodStudent extends Student {
    addGrade(grade) {
        let newGrade = Math.min(grade + 1, 5); 
        super.addGrade(newGrade); 
    }
}
  }

let student = new GoodStudent("Иван", 17);
student.addGrade(4); 

console.log(student.grades);
      
    }
}


