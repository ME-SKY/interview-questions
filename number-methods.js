/*

## 📊 ОСНОВЫ
- В JavaScript один числовой тип - Number (64-бит IEEE 754)
- Формат: [1 бит знак][11 бит экспонента][52 бит мантисса]
- Мантисса - значащая часть числа, содержит его точные цифры

## 🎯 СТРУКТУРА ЧИСЛА IEEE 754
число = знак × мантисса × 2^экспонента

Пример: 5.25 = 1.0101 × 2²
- Знак: 0 (+)
- Экспонента: 2 + 1023 = 1025
- Мантисса: .0101000000000000000000000000000000000000000000000000

## ⚡ ОСОБЫЕ ЗНАЧЕНИЯ
console.log(1 / 0);           // Infinity
console.log(-1 / 0);          // -Infinity  
console.log(0 / 0);           // NaN
console.log(-0);              // -0
console.log(1 / +0);          // Infinity
console.log(1 / -0);          // -Infinity

## 📈 ПРЕДЕЛЫ
console.log(Number.MAX_VALUE);           // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);           // 5e-324
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991
console.log(Number.EPSILON);             // 2.220446049250313e-16

## ⚠️ ПРОБЛЕМА ТОЧНОСТИ
console.log(0.1 + 0.2);                  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);          // false

## 🔍 ПРОВЕРКИ
console.log(Number.isNaN(NaN));          // true
console.log(Number.isFinite(42));        // true
console.log(Number.isInteger(42.5));     // false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

## 🔄 ПРЕОБРАЗОВАНИЯ
console.log(Number("123"));              // 123
console.log(parseInt("123.45"));         // 123
console.log(parseFloat("123.45"));       // 123.45
console.log(+"123");                     // 123

## 📐 ФОРМАТИРОВАНИЕ
const num = 12345.6789;
console.log(num.toFixed(2));             // "12345.68"
console.log(num.toLocaleString('ru-RU')); // "12 345,679"
console.log(num.toExponential(2));       // "1.23e+4"

## 🧮 МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ (Math)
console.log(Math.floor(3.7));            // 3
console.log(Math.ceil(3.2));             // 4
console.log(Math.round(3.5));            // 4
console.log(Math.pow(2, 3));             // 8
console.log(Math.sqrt(16));              // 4
console.log(Math.random());              // 0-1
console.log(Math.min(1, 2, 3));          // 1

## 🔢 БИТОВЫЕ ОПЕРАЦИИ
console.log(5 & 3);                      // 1 (AND)
console.log(5 | 3);                      // 7 (OR)  
console.log(5 << 1);                     // 10 (сдвиг влево)
console.log(5 >> 1);                     // 2 (сдвиг вправо)

## 💡 РЕШЕНИЕ ПРОБЛЕМЫ ТОЧНОСТИ
function roundToPrecision(number, precision = 2) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
console.log(roundToPrecision(0.1 + 0.2)); // 0.3

## 🚀 BIGINT (для больших чисел)
const big = 9007199254740993n;
console.log(big + 1n);                   // 9007199254740994n

## 🛠️ ПОЛЕЗНЫЕ УТИЛИТЫ
// Случайное число в диапазоне
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверка на четность
const isEven = num => num % 2 === 0;

// Форматирование с разделителями
function formatNumber(num) {
    return num.toLocaleString('ru-RU');
}

// Системы счисления
console.log(0b1101);                     // 13 (двоичная)
console.log(0o755);                      // 493 (восьмеричная)
console.log(0xFF);                       // 255 (шестнадцатеричная)
console.log((255).toString(16));         // "ff"

## 💾 КЛЮЧЕВЫЕ МОМЕНТЫ
- Мантисса ограничена 52 битами → погрешности с дробями
- Всегда проверяйте граничные значения
- Для денег используйте целые числа (копейки/центы)
- Используйте BigInt для чисел > 9007199254740991
- Округляйте результаты операций с плавающей точкой
*/