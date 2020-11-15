import AllowedHighwayTypes from "./Configurations/AllowedHighwayTypes.json";
export const LoadWays = (OSM) => {
  let ways = {};
  const xmlWays = OSM.getElementsByTagName("way");
  for (let i = 0; i < xmlWays.length; i++) {
    let wayTagArray = Array.prototype.slice
      .call(xmlWays[i].childNodes)
      .filter((x, i) => i % 2);

    let way = {};
    wayTagArray
      .filter((currentTag) => currentTag.nodeName === "tag")
      .forEach((x) => (way[x.getAttribute("k")] = x.getAttribute("v")));

    if (AllowedHighwayTypes.list.includes(way["highway"])) {
      way["nodes"] = [];
      wayTagArray
        .filter((currentTag) => currentTag.nodeName === "nd")
        .forEach((x) => way["nodes"].push(x.getAttribute("ref")));
      ways[xmlWays[i].getAttribute("id")] = way;
    }
  }
  return ways;
};
