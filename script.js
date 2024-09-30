class User {
    constructor(firstName, lastName, age, email) {
        this.userID = Math.floor(Math.random() * 1000000);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

class product {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.id = Math.floor(Math.random() * 1000000);
        this.price = price;
    }
}

class cart {
    constructor(userID) {
        this.ownerID = userID;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    remoteItem(id) {
        this.items = this.items.filter((i) => i.id !== id);
    }
    listItems() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(item);
        }
    }
}