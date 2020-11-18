export const StreamFile = (file, stream) => {
  console.log(file);
  file.ReadableStream.pipeThrough(stream);
};
