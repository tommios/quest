//
// Проверить является ли строка палиндромом.
//

function isPalindrome(str) {
  let strLen = str.length;
  let result = "";

  //Сравниваем все элементы от начала строки со всеми элементами с конца строки
  for (var i = 0; i < strLen; i++) {
    if (str[i] === str[strLen - 1 - i]) {
      result = "palindrome";
    } else {
      result = "is not palindrome";
      return result;
    }
  }
  return result;
}

test1 = isPalindrome("madamimadam"); // ---> palindrome
test2 = isPalindrome("abcded"); // ---> is not palindrome

console.log(test1);
console.log(test2);
