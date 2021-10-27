export class Character {
  constructor(name, type) {
    if (this.constructor === Character) {
      throw new Error('Абстрактный класс не может быть создан');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('name должна быть в диапазоне от 2 до 10 символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
