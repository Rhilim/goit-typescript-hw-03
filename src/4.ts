class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  protected key: Key;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("The door is open. The person has entered the house.");
    } else {
      console.log("The door is closed. The person cannot enter the house.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor() {
    super();
    this.key = new Key();
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      console.log("The door remains closed. Incorrect key.");
    }
  }
}

const house = new MyHouse();
const person = new Person(new Key());

house.openDoor(person.getKey());
house.comeIn(person);

export {};
