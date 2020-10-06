class InsertionSort {
  constructor(array) {
    this.array = array;
  }
  sort(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let n = i - 1;
      while (n > -1 && current < array[n]) {
        array[n + 1] = array[n];
        n--;
      }
      array[n + 1] = current;
    }
    return array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = InsertionSort;
