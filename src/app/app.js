class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.setFullName();
  }

  setFullName() {
    const fullnameId = document.getElementById('fullname');
    fullnameId.innerHTML = `${this.fname} ${this.lname}`;
  }
}

new Person('John', 'Smith');
