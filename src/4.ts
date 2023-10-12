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
  protected key: Key;
  protected tenants: Person[] = [];

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Двері відкриті. Людина увійшла в будинок.");
    } else {
      console.log("Двері закриті. Людина не може увійти в будинок.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відчинені.");
    } else {
      console.log("Двері залишаються закритими. Неправильний ключ.");
    }
  }

  setKey(key: Key): void {
    this.key = key;
  }
}

const key = new Key();
const house = new MyHouse();
const person = new Person(key);

house.setKey(key);

house.openDoor(person.getKey());
house.comeIn(person);
