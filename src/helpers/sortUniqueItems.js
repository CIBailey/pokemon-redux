export function sortUniqueItems(list) {
  const uniqueArray = removeDuplicateStrings(list);

  const alphaList = sortStringsByDescendingOrder(uniqueArray);

  return alphaList;
}

const removeDuplicateStrings = (list) =>
  list.filter((item, index) => list.indexOf(item) === index);

const sortStringsByDescendingOrder = (list) =>
  list.sort((a, b) => a.localeCompare(b));
