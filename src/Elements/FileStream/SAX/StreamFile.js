export const StreamFile = (file, stream) => {
  console.log(file);
  file.pipeThrough(stream);
};
