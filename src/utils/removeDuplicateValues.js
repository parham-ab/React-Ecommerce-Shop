function removeDuplicateValues(arr) {
  let outputArray = Array.from(new Set(arr));
  return outputArray;
}
export default removeDuplicateValues;
