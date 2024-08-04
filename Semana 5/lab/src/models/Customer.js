class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getContactInfo() {
    return `Customer: ${this.name}, Email: ${this.email}`;
  }
}

module.exports = Customer;
