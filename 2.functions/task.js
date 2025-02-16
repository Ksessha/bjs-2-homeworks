function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for(let i = 0; i<arr.length; i++){
    if(arr[i]>max){
      max = arr[i];
    }
    if(arr[i]<min){
      min = arr[i];
    }
    sum += arr[i];
  }
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } 
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } 
  const max = Math.max(...arr); 
  const min = Math.min(...arr); 
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0){
    return 0;
  } 

  let sumEvenElement = 0; 
  let sumOddElement = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i]; 
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  let sumEvenElement = 0; 
  let countEvenElement = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement++; 
    }
  }

  if (countEvenElement === 0) return 0; 
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (arr.length === 0){
    return 0;
  }

  let maxWorkerResult = -Infinity; 

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]); 
    if (result > maxWorkerResult) {
      maxWorkerResult = result; 
    }
  }

  return maxWorkerResult;
}