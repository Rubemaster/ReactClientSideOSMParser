export const Get = (url) =>
  new Promise((resolve) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response;
      })
      .then((response) =>
        response.text().then((text) => {
          const parser = new DOMParser();
          resolve(parser.parseFromString(text, "text/xml"));
        })
      )
      .catch((e) => {
        resolve({ status: "fail", error_message: e });
      });
  });
