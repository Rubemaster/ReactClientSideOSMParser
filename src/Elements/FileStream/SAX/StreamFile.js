export const StreamFile = (file, stream) => {
  console.log(file);
  let targetReadBy = new WritableStream();
  console.log(targetReadBy);
  file.pipeThrough(targetReadBy.getWriter());
};
