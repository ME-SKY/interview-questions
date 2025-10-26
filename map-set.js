// Map example
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // value1

// Set example
const set = new Set();
set.add('element1');
set.add('element2');
console.log(set.has('element1')); // true

// WeakMap example
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // value

// WeakSet example
const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // true

// The main difference between WeakMap and Map is that WeakMap does not prevent its keys from being garbage collected.
// WeakMap is useful when you need to store additional data for an object, but you don't want to prevent the object from being garbage collected.
// WeakSet is similar to Set, but it does not prevent its elements from being garbage collected.
// WeakSet is useful when you need to store a collection of objects, but you don't want to prevent the objects from being garbage collected.


/* 
  Map — коллекция ключ-значение, где ключи могут быть любого типа (включая объекты).
  Особенности:

    Сохраняет порядок элементов.

    Имеет методы: set(), get(), has(), delete(), size.

    Не удаляет элементы автоматически.

    Примеры использования:


*/

//Кеширование результатов вычислений

const cache = new Map();
function computeExpensiveValue(key) {
  if (cache.has(key)) return cache.get(key);
  const result = /* вычисления */;
  cache.set(key, result);
  return result;
}

// Хранение метадата для дом элементов:

const metadata = new Map();
const button = document.querySelector('button');
metadata.set(button, { clicks: 0 });
button.addEventListener('click', () => {
  const data = metadata.get(button);
  data.clicks++;
});

/* 
  Set — коллекция уникальных значений любого типа.
  
  Особенности:

    Сохраняет порядок добавления.

    Имеет методы: add(), has(), delete(), size.

    Примеры использования:
*/

// Удаление дубликатов из массива:

const numbers = [1, 2, 2, 3];
const unique = [...new Set(numbers)]; // [1, 2, 3]

//отслеживание уникальных посетителей
const visitors = new Set();
visitors.add('user1');
visitors.add('user2');
visitors.add('user1'); // Не добавится
console.log(visitors.size); // 2


/* 
  WeakMap — коллекция ключ-значение, где ключи только объекты.
  Особенности:

    Не предотвращает удаление объектов сборщиком мусора.

    Не имеет методов для итерации (keys(), values(), entries()) и свойства size.

    Автоматически удаляет элемент, если ключ-объект удаляется из памяти.

  Примеры использования:
*/

// приватные данные для классов:
const privateData = new WeakMap();
class Person {
  constructor(name) {
    privateData.set(this, { name });
  }
  getName() {
    return privateData.get(this).name;
  }
}

// При удалении экземпляра Person связанные данные автоматически удалятся из WeakMap.

/* 
  WeakSet — коллекция уникальных объектов.
  Особенности:

  Аналогично WeakMap, объекты автоматически удаляются при отсутствии других ссылок.

  Нет методов итерации и свойства size.
*/