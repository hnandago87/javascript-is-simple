// Pure Function
// Assume eslint-config-airbnb applies
// Assume No babel

const pickIndexOfUniqueValue = (arr, identifier) => {
  let computedIndex = null;
  if(Array.isArray(arr) && arr.length > 0){
    element = arr.filter((input, index) => {
      const comparision = input === comparer || input[identifier] === comparer;
      if(comparision){
        computedIndex = index;
      }
      return comparision;
    });
  }
  return computedIndex;
};

export { pickUniqueValue };
