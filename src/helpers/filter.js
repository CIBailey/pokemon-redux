export function cleanUpFavoriteArray(pokeArray) {
  const uniqueArray = pokeArray.filter(function (item, pos) {
    return pokeArray.indexOf(item) == pos;
  });

  const alphaArray = uniqueArray.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return alphaArray;
}
