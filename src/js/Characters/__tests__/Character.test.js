import { Character } from '../Character';
import { Bowman } from '../Bowman';

test('Валидация имени персонажа меньше 2 символов', () => {
  function createCharacter() {
    return new Bowman('A');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Валидация имени персонажа больше 10 символов', () => {
  function createCharacter() {
    return new Bowman('Очень длинное имя персонажа');
  }

  expect(createCharacter).toThrowError('name должна быть в диапазоне от 2 до 10 символов');
});

test('Создание персонажа базового класса', () => {
  function createCharacter() {
    return new Character('Some Name', 'Character');
  }

  expect(createCharacter).toThrowError('Абстрактный класс не может быть создан');
});
