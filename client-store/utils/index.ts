export function splitArrayIntoChunks(array: any[], chunkSize: number = 8) {
  // Array to hold the resulting chunks
  const result = [];

  // Iterate over the array, slicing it into chunks
  for (let i = 0; i < array?.length; i += chunkSize) {
    // Slice out a chunk of the specified size and add it to the result array
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
export function prepareStringPrice(num: number) {
  // Convert the number to a string
  const numStr = num.toFixed(2);

  // Split the string using the dot as the delimiter
  const [int, decimal] = numStr.split(".");

  return {
    int: int || "0", // In case there's no number before the dot
    decimal: decimal || "0", // In case there's no number after the dot
  };
}
