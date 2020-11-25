import { State } from "./Configurations/State.js";
export const Stream = (file) => {
  const pBFReader = file.stream().getReader();
  const state = new State();
  state.start();
  const currentReadableStream = new ReadableStream({
    start(e) {
      const push = () => {
        pBFReader.read().then(({ done, value }) => {
          while (!state.advance.call(value[state.advance.id()])) {}
          console.log(state.members);
        });
      };

      push();
    }
  });
  currentReadableStream.getReader().read();
};
