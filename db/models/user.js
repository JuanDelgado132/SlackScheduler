class user {
  constructor(firstName, lastName) {
    this.firstname = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstname;
  }

  getLastName() {
    return this.lastName
  }


}


module.exports = user;