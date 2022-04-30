let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);
  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  for (let i = 0; i < result.length; ++i) {
    if (result[i] === item) {
      result.splice(i, 1);
      break;
    }
  }

  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  let x = index;

  if (result[x] !== undefined) {
    index = result[x];
    result.splice(x, 1);
    return index;
  }

  return null;
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  var items = result.join(", ");
  return items;
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
