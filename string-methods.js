/* 
  Strings in JavaScript
  =======================
  Strings are sequences of characters used to represent text based data.
  String literals can be enclosed in single quotes or double quotes.

  String Methods
  ===============
  Strings in JavaScript have a lot of methods that can be used to manipulate strings.
  Some examples are:

  - toUpperCase() - returns the string in uppercase
  const str = 'hello world';
  console.log(str.toUpperCase()); // 'HELLO WORLD'

  - toLowerCase() - returns the string in lowercase
  const str = 'HELLO WORLD';
  console.log(str.toLowerCase()); // 'hello world'

  - trim() - removes whitespace from both ends of a string
  const str = '   hello world   ';
  console.log(str.trim()); // 'hello world'

  - substring() - extracts a part of a string
  const str = 'hello world';
  console.log(str.substring(0, 5)); // 'hello'

  - slice() - extracts a part of a string
  const str = 'hello world';
  console.log(str.slice(0, 5)); // 'hello'

  - replace() - replaces a part of a string
  const str = 'hello world';
  console.log(str.replace('world', 'javascript')); // 'hello javascript'

  - split() - splits a string into an array of strings
  const str = 'hello,world,javascript';
  console.log(str.split(',')); // ['hello', 'world', 'javascript']

  - join() - joins an array of strings into a single string
  const arr = ['hello', 'world', 'javascript'];
  console.log(arr.join(', ')); // 'hello,world,javascript'

  - charAt() - returns the character at the specified index
  const str = 'hello world';
  console.log(str.charAt(0)); // 'h'

  - charCodeAt() - returns the Unicode value of the character at the specified index
  const str = 'hello world';
  console.log(str.charCodeAt(0)); // 104

  - concat() - concatenates two or more strings
  const str1 = 'hello';
  const str2 = 'world';
  console.log(str1.concat(str2)); // 'helloworld'
*/
