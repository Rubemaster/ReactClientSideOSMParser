const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const lpad = (value, padding) => {
  var zeroes = new Array(padding + 1).join("0");
  return (zeroes + value).slice(-padding);
};
export const StreamFile = (file, text, progressRef) => {
  let bufferCount = 0;
  const reader = file.getReader();
  const currentReadableStream = new ReadableStream({
    start(controller) {
      const push = () => {
        reader.read().then(({ done, value }) => {
          bufferCount++;
          if (done) {
            console.log("FILE LOADED");
            controller.close();
            return;
          }

          const loopLength = 5000;
          const recurstions = 4;
          let recurstionIterator = 0;
          const recursive = async (at, length) => {
            for (let i = 0; i < loopLength && at < length; i++) {
              at++;
            }
            await sleep(0);

            if (recurstionIterator > recurstions) {
              recurstionIterator = 0;
              await text("READING BUFFER: " + lpad(bufferCount, 4));
              progressRef.current.value = Math.round((at * 100) / length);
            }
            if (at < length) {
              recurstionIterator++;
              recursive(at, length);
            } else {
              console.log("BUFFER COMPLETE, TOTAL LENGTH: " + length);
              await sleep(1);
              controller.enqueue(value);
              push();
            }
          };
          recursive(0, value.length);
        });
      };

      push();
    }
  });
  currentReadableStream.getReader().read();
};
