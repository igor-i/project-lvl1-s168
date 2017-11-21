export const getRandomInt = (min = 1, max = 4) => Math.floor(Math.random() * (max - min)) + min;

export const getMinOfArray = numArray => Math.min.apply(null, numArray);

export const getMaxOfArray = numArray => Math.max.apply(null, numArray);

export const sortNumsArray = numArray => numArray.sort((a, b) => a - b);

export const objToJsonStr = obj => JSON.stringify(obj);
