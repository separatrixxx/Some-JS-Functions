//Функции для получения значений и выводы ответа
function myPrs() {
  let val = document.getElementById('inputParseInt').value;

  document.getElementById("resultParseInt").innerHTML = myParseInt(val);
}

function myInd() {
  let substr = prompt("Введите подстроку, позицию которой нужно найти: ", "");

  let str = document.getElementById('inputIndexOf').value;

  document.getElementById("resultIndexOf").innerHTML = myIndexOf(str, substr);
}

function myAtt() {
  let num = +prompt("Введите индекс искомого элемента: ", "");

  let arr = JSON.parse("[" + document.getElementById('inputAt').value + "]");

  document.getElementById("resultAt").innerHTML = arr.myAt(num);
}

function myPp() {

  let arr = JSON.parse("[" + document.getElementById('inputPop').value + "]");

  document.getElementById("resultPop").innerHTML = "Возвращённое значение (удалённый элемент массива): " + arr.myPop() + " Изменившийся массив: " + arr;
}

function myPsh() {
  let valPush = prompt("Введите добавляемое значение: ", "");

  let arr = JSON.parse("[" + document.getElementById('inputPush').value + "]");

  document.getElementById("resultPush").innerHTML = "Возвращённое значение (длина массива): " + arr.myPush(valPush) + " Изменившийся массив: " + arr;
}

function myShft() {

  let arr = JSON.parse("[" + document.getElementById('inputShift').value + "]");

  document.getElementById("resultShift").innerHTML = "Возвращённое значение (удалённый элемент массива): " + arr.myShift() + " Изменившийся массив: " + arr;
}

function myUnshft() {
  let valUnshift = prompt("Введите добавляемое значение: ", "");

  let arr = JSON.parse("[" + document.getElementById('inputUnshift').value + "]");

  document.getElementById("resultUnshift").innerHTML = "Возвращённое значение (длина массива): " + arr.myUnshift(valUnshift) + " Изменившийся массив: " + arr;;
}

//Реализация parseInt();
function myParseInt(str) {
  let strLen = str.length;
  let result = '';

  let flag = false;

  for (let i = 0; i < strLen; i++) {
    if (str[i] === ' ') {
      if (flag) {
        break;
      }
    } else if (String(+str[i]) === 'NaN') {
      break;
    } else {
      result += str[i];
      flag = true;
    }
  }

  if (result === '') {
    return NaN;
  } else {
    return result;
  }
}

//Реализация indexOf();
function myIndexOf(str, substr, arg) {

  let flag = false;
  let pos;
  let len = str.length;
  let sum = 0;

  let strArray = [];
  let valArray = '';

  for (let i of str) {
    for (let j = 0; j < str.length; j++) {
      valArray += str[j];
      strArray.push(valArray)
    }

    str = str.slice(1);
    valArray = '';
  }

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === substr) {
      flag = true;
      pos = i + 1;
      break;
    }
  }

  for (let i = len; i >= 1; i--) {

    sum += i;

    if (pos <= sum) {
      pos = len - i;
      break;
    }
  }

  if (flag) {
    return(pos);
  } else {
    return(-1);
  }

}

//Реализация at();
Array.prototype.myAt = function (num) {
  if (num >= 0) {
    let check = 0;

    for (let val of this) {
      if (num === check) {
        return val;
      }
      check += 1;
    }

  } else {
    let check = -this.length;

    for (let val of this) {
      if (num === check) {
        return val;
      }
      check += 1;
    }

  }
}

//Реализация pop();
Array.prototype.myPop = function () {
  const arrLength = this.length;
  const deleteObj = this[arrLength - 1];
  this.length = arrLength - 1;
  return deleteObj;
};

//Реализация push();
Array.prototype.myPush = function () {
  const argLength = arguments.length;
  const arrLength = this.length;
  for (let i = 0; i < argLength; i++) {
    this[arrLength + i] = arguments[i];
  }
  return this.length;
};

//Реализация shift();
Array.prototype.myShift = function () {
  const arrLength = this.length;
  const deleteObj = this[0];
  for (let i = 0; i < arrLength; i++) {
    this[i] = this[i + 1];
  }
  this.length -= 1;
  return deleteObj;
};

//Реализация unshift();
Array.prototype.myUnshift = function () {
  const argLength = arguments.length;
  const arrLength = this.length;
  for (let i = arrLength; i >= 0; i--) {
    this[i + argLength - 1] = this[i - 1]
  }
  for (let i = 0; i < argLength; i++) {
    this[i] = arguments[i]
  }
  return this.length;
};
