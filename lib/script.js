function myPrs() {
  let val = document.getElementById('inputParseInt').value;

  document.getElementById("resultParseInt").innerHTML = myParseInt(val);
}

function myPrs1() {
  let val = document.getElementById('inputParseInt1').value;

  document.getElementById("resultParseInt1").innerHTML = myParseInt1(val);
}

function myInd() {
  let substr = prompt("Введите подстроку, позицию которой нужно найти: ", "");

  let str = document.getElementById('inputIndexOf').value;

  document.getElementById("resultIndexOf").innerHTML = myIndexOf(str, substr);
}

function myParseInt(str) {
  let strLen = str.length;
  let result = '';

  flag = false;

  for (let i = 0; i < strLen; i++) {
    if (str[i] === ' ') {
      if (flag === false) {
        continue;
      } else {
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
    return "Не удалось преобразовать значение :(";
  } else {
    return 'Преобразованное значение: ' + result;
  }
}

function myParseInt1(str) {
  let strLen = str.length;
  let result = '';

  flag = false;

  for (let i = 0; i < strLen; i++) {
    if (str[i] === ' ' || String(+str[i]) === 'NaN') {
      if (!flag) {
        continue;
      } else {
        break;
      }
    } else {
      result += str[i];

      flag = true;
    }
  }

  if (result === '') {
    return "Не удалось преобразовать значение :(";
  } else {
    return 'Преобразованное значение: ' + result;
  }
}


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