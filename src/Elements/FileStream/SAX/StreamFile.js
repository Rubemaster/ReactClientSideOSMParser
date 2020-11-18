export const StreamFile = (file, stream) => {
  console.log(file);
  let targetReadBy = new WritableStream();
  console.log(targetReadBy);
  console.log(file.getReader());
  const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });
  console.log(queueingStrategy);
};
