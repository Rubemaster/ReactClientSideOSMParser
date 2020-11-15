export const Open = (InputRef) =>
  new Promise((resolve) => {
    InputRef.current.onchange = (e) => {
      resolve(e.target.files[0]);
    };
  });
