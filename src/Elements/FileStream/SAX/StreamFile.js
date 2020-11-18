export const StreamFile = (file, stream) => {
  console.log(file);
  let targetReadBy = new WritableStream();
  console.log(targetReadBy);
  const reader = file.getReader();
  console.log(reader);
  const queueingStrategy = new ByteLengthQueuingStrategy({
    highWaterMark: 0
  });
  console.log(queueingStrategy);
  const currentReadableStream = new ReadableStream(
    {
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // Is there no more data to read?
            if (done) {
              // Tell the browser that we have finished sending data
              controller.close();
              console.log("REALLY REALLY DONE");
              return;
            }
            let join = "";
            for (let i = 0; i < 200; i++) {
              join += String.fromCharCode(value[i]);
            }
            console.log(join);
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            push();
          });
        }

        push();
      }
    },
    queueingStrategy
  );
  currentReadableStream
    .getReader()
    .read()
    .then(console.log(currentReadableStream));
  console.log(String.fromCharCode(25));
};
