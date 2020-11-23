export const IdentifierActions = {
  0: (e, input) => {
    if (!e.comment) {
      if (e.tagRead.active) {
        e.tagRead.value += input;
      }
    }
    return e;
  },
  1: {
    "<": (e) => {
      if (!e.comment) {
        e.depth++;
        e.tagRead.closing = false;
        e.tagRead.active = true;
      }
      return e;
    },
    ">": (e) => {
      if (!e.comment) {
        e.tagRead.active = false;
        if (!e.tagRead.closing) {
          e.tagProcessor.action(e.tagRead.value, e.tagProcessor.putStash);
        }
        e.tagRead.value = "";
      }
      return e;
    },

    "\n": (e) => {
      e.comment = false;
      return e;
    }
  },
  2: {
    "//": (e) => {
      e.comment = true;
      return e;
    },
    "</": (e) => {
      if (!e.comment) {
        e.tagRead.closing = true;
        e.depth--;
      }
      return e;
    },
    "/>": (e) => {
      if (!e.comment) {
        e.tagRead.active = false;
        if (!e.tagRead.closing) {
          e.tagProcessor.action(e.tagRead.value, e.tagProcessor.putStash);
        }
        e.tagRead.value = "";
        e.depth--;
        e.at++;
      }
      return e;
    },
    "<?": (e) => {
      if (!e.comment) {
        if (!e.comment) {
          e.tagRead.closing = false;
          e.tagRead.active = true;
        }
        e.at++;
      }
      return e;
    },
    "?>": (e) => {
      return e;
    }
  }
};
