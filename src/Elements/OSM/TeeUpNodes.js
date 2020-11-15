export const TeeUpNodes = (ways) => {
  let nodes = {};
  for (let key in ways) {
    ways[key].nodes.forEach((node) => {
      if (!nodes[node]) {
        nodes[node] = {};
      }
    });
  }
  return nodes;
};
