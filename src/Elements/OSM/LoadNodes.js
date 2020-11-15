export const LoadNodes = (OSM, tee) => {
  const xmlNodes = OSM.getElementsByTagName("node");
  for (let i = 0; i < xmlNodes.length; i++) {
    if (tee[xmlNodes[i].id]) {
      tee[xmlNodes[i].id].coordinates = {
        lat: parseFloat(xmlNodes[i].getAttribute("lat")),
        lon: parseFloat(xmlNodes[i].getAttribute("lon"))
      };
    }
  }
  return tee;
};
