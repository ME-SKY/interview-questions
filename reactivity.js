/* 
  Реактивность это - это парадигма программирования, ориентированная на потоки данных и распространение изменений. 
  Проще говоря, это способность программы автоматически реагировать на изменения данных, обновляя все, что от этих данных зависит.
*/

/* 
  В нативном JavaScript нет встроенной реактивности. Её реализуют с помощью определенных паттернов и механизмов. 
  Базовый принцип — отслеживание изменения значения и уведомление всех "подписчиков" об этом изменении.
  Классическая реализация — использование геттеров/сеттеров или Proxy
*/

//простой пример реактивности
function reactive(target) {
  const handlers = {
    get(obj, key) {
      return obj[key];
    },
    set(obj, key, value) {
      obj[key] = value;
      console.log(`Свойство ${key} изменено на ${value}. Запускаем обновления!`);
      return true;
    }
  };
  return new Proxy(target, handlers);
}

const state = reactive({ count: 0 });
state.count = 5; // В консоли: "Свойство count изменено на 5. Запускаем обновления!"
state.count = 4; // В консоли: "Свойство count изменено на 4. Запускаем обновления!"

// Signals - это способ реализации реактивности, при котором изменения данных фиксируются в виде сигналов, 
// которые могут быть обработаны подписчиками.

function createSignal(initialValue) {
  let value = initialValue;
  const subscribers = new Set();

  const getter = () => {
    // Здесь можно собирать зависимости, если в данный момент есть активный эффект
    if (activeEffect) {
      subscribers.add(activeEffect);
    }
    return value;
  };

  const setter = (newValue) => {
    value = newValue;
    // Уведомляем всех подписчиков
    subscribers.forEach(effect => effect());
  };

  return [getter, setter];
}

let activeEffect = null;
function createEffect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

// Использование:
const [count, setCount] = createSignal(0);
createEffect(() => {
  console.log('Count is:', count());
});

setCount(1); // Выведет: Count is: 1

// Vue3 например ref и reactive - примеры тех же сигналов
// В React например useState, useContext, каждый раз при обновлении (setState) перерисовывается весь компонент
// Vue и React используют синхронную реактивность, RxJs работает с асинхронными потоками данных

