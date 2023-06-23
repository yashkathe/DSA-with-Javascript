class Student {

    /* Constructor - Blue Print */

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.lateRecord = 0;
        this.scores = [];
    }

    /* Instance Methods */

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.lateRecord += 1;
        return this.lateRecord;
    }

    addScores(score) {
        this.scores.push(score);
        return this.scores;
    }

    /* Class Methods */

    static EnrollStrudents(){
        return "Enrolling Students"
    }
}

const firstStudent = new Student("Yash", "Kathe");

console.log(Student.EnrollStrudents());