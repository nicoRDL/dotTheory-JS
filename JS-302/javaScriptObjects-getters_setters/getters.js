class Student {
  constructor(gpa, credits){
      this.gpa = gpa;
      this.credits = credits;
  }

  stringGPA() {
      return this.gpa.toString();
  }

  get level() {
    const getCredit = this.credits;
    
    switch(true) {
      case getCredit > 90:
        return 'Senior';
      case getCredit <= 90 && getCredit > 60:
        return 'Junior';
      case getCredit <= 60 && getCredit > 30:
        return 'Sophomore';
      default:
        return 'Freshman';
    }
  }

  set major(major) {
    if (this.level === 'Junior' || this.level === 'Senior') {
      this._major = major;
    } else {
      this._major = 'None';
    }
  }
}

const student = new Student(3.9, 60);

console.log(student);
