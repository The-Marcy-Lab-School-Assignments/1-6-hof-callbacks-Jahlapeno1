const myForEach = (arr, callbFunc) => {
  for (const name of arr) {
    callbFunc(name)
  }
};

const myMap = (arr, map) => {
  const newArr = []
  for (const num of arr) {
    newArr.push(map(num))
  }
  return newArr
};

const myFind = (arr, find) => {
  for (const index of arr) {
    if (find(index)) {
      return index
    }
  }
};

const myFilter = (arr, filter) => {
  newArr = []
  for (const value of arr) {
    if (filter(value)) {
      newArr.push(value)
    }
  } return newArr
};

const sortWords = (arr) => {
  const sortedArr = [...arr]
  // console.log(sortedArr.sort())
  return sortedArr.sort()
};

const sortNumbers = (arr) => {
  const sortedArr = [...arr]
  return sortedArr.sort((a, b) => a - b)
};

const sortNumbersBetter = (arr, boolean) => {
  const sortedArr = [...arr]
  return boolean ? sortedArr.sort((a, b) => b - a) : sortedArr.sort((a, b) => a - b)
};

const sortUsersByOrder = (arrOfObj) => {
  const sortedArr = [...arrOfObj]
  return sortedArr.sort((a, b) => a.order - b.order)
};

const sortUsersByName = (arrOfObj) => {
  const sortedArr = [...arrOfObj]
  return sortedArr.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    } else {
      return 0
    }
  })
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
