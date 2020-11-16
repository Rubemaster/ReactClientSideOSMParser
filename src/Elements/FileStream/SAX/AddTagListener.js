export const AddTagListener = (stream) => {
  stream.on("opentag", function (node) {
    console.log(node);
    // same object as above
  });
  /*parser.onopentag = function (node) {
    // opened a tag.  node has "name" and "attributes"
  };*/
};
