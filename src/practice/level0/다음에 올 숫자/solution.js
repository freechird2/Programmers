function gob(arr) {
  var flag = true;
  var result = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    if (!result) {
      result = arr[i + 1] / arr[i];
      continue;
    }

    if (result !== arr[i + 1] / arr[i]) {
      flag = false;
      break;
    }
  }

  return flag ? arr[arr.length - 1] * result : 0;
}

function minus(arr) {
  var flag = true;
  var result = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    if (!result) {
      result = arr[i + 1] - arr[i];
      continue;
    }

    if (result !== arr[i + 1] - arr[i]) {
      flag = false;
      break;
    }
  }

  return flag ? arr[arr.length - 1] + result : 0;
}

function solution(common) {
  var answer = 0;

  return gob(common) || minus(common);
}
