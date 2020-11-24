import { AttributeActions } from "./Configurations/AttributeActions.js";
export const ProcessTag = (tag, putStash) => {
  const nameAt = tag.indexOf(" ");
  let e = {
    at: nameAt,
    name: tag.substr(0, nameAt),
    temp: {
      swatch: false,
      name: "",
      value: ""
    },
    attributes: {}
  };
  while (e.at < tag.length) {
    const action = AttributeActions[tag[e.at]];
    if (action) {
      e = action(e);
    } else {
      e = AttributeActions["else"](e, tag[e.at]);
    }
    e.at++;
  }
  console.log({ name: e.name, attributes: e.attributes });
};
