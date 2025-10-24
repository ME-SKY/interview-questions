/*  
  == - сравнение по значению, нестрогое сравнение, с приведением типов,
  === - сравнение по значению и типу, строгое сравнение, без приведения типов 
*/

// =============================================================================
// ПРАВИЛА НЕСТРОГОГО СРАВНЕНИЯ (==) - ПРИВЕДЕНИЕ ТИПОВ
// =============================================================================

// ----------------------------
// 1. СТРОКИ И ЧИСЛА
// ----------------------------
console.log('5' == 5);           // true  (string → number)
console.log('' == 0);            // true  ('' → 0)
console.log('   ' == 0);         // true  ('   ' → 0)
console.log('\n' == 0);          // true  ('\n' → 0)
console.log('123' == 123);       // true  ('123' → 123)
console.log('1.23' == 1.23);     // true  ('1.23' → 1.23)
console.log('0x10' == 16);       // true  ('0x10' → 16)
console.log('abc' == 0);         // false ('abc' → NaN)

// ----------------------------
// 2. BOOLEAN И ДРУГИЕ ТИПЫ
// ----------------------------
console.log(true == 1);          // true  (true → 1)
console.log(false == 0);         // true  (false → 0)
console.log(true == '1');        // true  (true → 1, '1' → 1)
console.log(false == '0');       // true  (false → 0, '0' → 0)
console.log(true == 'true');     // false (true → 1, 'true' → NaN)
console.log(false == '');        // true  (false → 0, '' → 0)
console.log(false == 'false');   // false (false → 0, 'false' → NaN)
console.log(true == 2);          // false (true → 1)

// ----------------------------
// 3. NULL И UNDEFINED
// ----------------------------
console.log(null == undefined);  // true  (специальное правило)
console.log(null == 0);          // false (null не приводится к 0!)
console.log(undefined == 0);     // false (undefined не приводится к 0!)
console.log(null == '');         // false
console.log(undefined == '');    // false
console.log(null == false);      // false
console.log(undefined == false); // false

// ----------------------------
// 4. ОБЪЕКТЫ И ПРИМИТИВЫ
// ----------------------------
console.log([] == 0);            // true  ([] → '' → 0)
console.log([] == '0');          // false ([] → '' != '0')
console.log([] == '');           // true  ([] → '')
console.log([0] == 0);           // true  ([0] → '0' → 0)
console.log([1] == 1);           // true  ([1] → '1' → 1)
console.log([1,2] == '1,2');     // true  ([1,2] → '1,2')
console.log({} == 0);            // false ({} → '[object Object]' → NaN)
console.log({} == '[object Object]'); // true ({} → '[object Object]')

// ----------------------------
// 5. SPECIAL CASES
// ----------------------------
console.log(NaN == NaN);         // false (NaN не равен ничему, даже себе)
console.log(Infinity == Infinity); // true
console.log(-0 == +0);           // true
console.log('0' == false);       // true  ('0' → 0, false → 0)
console.log('false' == false);   // false ('false' → NaN, false → 0)
console.log('\t' == 0);          // true  ('\t' → 0)

// ----------------------------
// 6. ФУНКЦИИ
// ----------------------------
function test() {}
console.log(test == 0);          // false (function → string → NaN)
console.log(test == '[object Function]'); // false (function → 'function test() {}')

// ----------------------------
// 7. СЛОЖНЫЕ ПРЕОБРАЗОВАНИЯ
// ----------------------------
console.log([null] == 0);        // true  ([null] → '' → 0)
console.log([undefined] == 0);   // true  ([undefined] → '' → 0)
console.log([[]] == 0);          // true  ([[]] → '' → 0)
console.log([[[]]] == 0);        // true  ([[[]]] → '' → 0)

// Объект с valueOf
const obj = {
    valueOf: function() { return 42; }
};
console.log(obj == 42);          // true  (obj → 42 через valueOf)

// Объект с toString
const obj2 = {
    toString: function() { return '123'; }
};
console.log(obj2 == 123);        // true  (obj2 → '123' → 123)

// =============================================================================
// ВЫВОД: Всегда используйте === для предсказуемого поведения!
// =============================================================================