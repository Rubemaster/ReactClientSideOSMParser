export const AttributeActions = {
  " ": (e) => {
    e.temp.swatch = true;
    e.temp.name = "";
    e.temp.value = "";
    return e;
  },
  "=": (e) => {
    e.temp.swatch = false;
    e.at++;
    return e;
  },
  else: (e, value) => {
    if (e.temp.swatch) {
      e.temp.name += value;
    } else {
      e.temp.value += value;
    }
    return e;
  },
  '"': (e) => {
    e.attributes[e.temp.name] = e.temp.value;
    return e;
  }
};
