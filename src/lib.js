export const getRandomInt = (min = 1, max = 3) => Math.floor(Math.random() * (max - min)) + min;

export const getMinOfArray = numArray => Math.min.apply(null, numArray);

export const getMaxOfArray = numArray => Math.max.apply(null, numArray);
