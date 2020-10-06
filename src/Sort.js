class InsertionSort {
  constructor(array) {
    this.array = array;
  }
  sort(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let previous = i - 1;
      if (previous > -1 && current < array[previous]) {
        array[previous + 1] = array[previous];
        previous--;
      }
      array[previous + 1] = current;
    }
    return array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = InsertionSort;
