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
