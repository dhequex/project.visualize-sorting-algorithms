class InsertionSort {
  constructor(array) {
    this.array = array;
  }
  sort(array) {
    for (let i = 1; i < array.length; i++) {
      let one = array[i];
      let oneDown = i - 1;
      if (oneDown > -1 && one < array[oneDown]) {
        array[oneDown + 1] = array[oneDown];
        oneDown--;
      }
      array[oneDown + 1] = one;
    }
    return array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = InsertionSort;
