export const StreamFile = (file, stream) => {
  console.log(file);
  let targetReadBy = new WritableStream();
  console.log(targetReadBy);
  const reader = file.getReader();
  console.log(reader);
  const queueingStrategy = new ByteLengthQueuingStrategy({ highWaterMark: 1 });
  console.log(queueingStrategy);
  const currentReadableStream = new ReadableStream({
    start(controller) {
      // The following function handles each data chunk
      function push() {
        // "done" is a Boolean and value a "Uint8Array"
        reader.read().then(({ done, value }) => {
          // Is there no more data to read?
          if (done) {
            // Tell the browser that we have finished sending data
            controller.close();
            return;
          }

          // Get the data and send it to the browser via the controller
          controller.enqueue(value);
          push();
        });
      }

      push();
    }
  });
  console.log(currentReadableStream);
};
