/* 
  Замыкание - это функция, которая запоминает свое лексическое окружение даже при выполнении вне этого окружения.
*/

  function createCounter() {
    let count = 0; // "замкнутая" переменная
  
    return function() {
      return ++count;
    };
  }

  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
// Переменная count сохраняется между вызовами

// 