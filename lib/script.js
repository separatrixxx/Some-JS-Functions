function myParseInt(str) {
  let strLen = str.length;
  let result = '';

  for (let i = 0; i < strLen; i++) {
    if (str[i] === ' ' || String(+str[i]) === 'NaN') {
      break;
    } else {
      result += str[i];
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
