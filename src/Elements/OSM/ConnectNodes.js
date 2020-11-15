export const ConnectNodes = (ways, tee) => {
  for (let key in ways) {
    const nodes = ways[key].nodes;
    for (let i = 0; i < nodes.length; i++) {
      const connections = [];
      if (i > 0) {
        connections.push(nodes[i - 1]);
      }
      if (i < nodes.length - 1) {
        connections.push(ways[key].nodes[nodes.length - 1]);
      }
      tee[nodes[i]].connections = {
        oneway: !!ways[key].oneway,
        list: connections
      };
    }
  }
  return tee;
};
