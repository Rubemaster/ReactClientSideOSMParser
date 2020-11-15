import * as OSM from "./Header.js";
export const processOsm = (requestAt) => {
  let database = window.indexedDB.open("RoadMap", 1);
  database.onupgradeneeded = () => {
    const db = database.result;
    const table = db.createObjectStore("nodes", { keyPath: "id" });
    console.log(db);
  };
  database.onsuccess = () => {
    const db = database.result;
    //console.log(db);
  };
  /*fetch(requestAt).then((response) =>
    response.text().then((text) => {
      const parser = new DOMParser();
      let xmlDoc = parser.parseFromString(text, "text/xml");

      const HandleWays = (OSMxml) => {
        const ways = OSM.LoadWays(OSMxml);
        let nodes = OSM.TeeUpNodes(ways);
        OSM.ConnectNodes(ways, nodes);
        OSM.LoadNodes(xmlDoc, nodes);
        return nodes;
      };
      const nodes = HandleWays(xmlDoc);
      console.log(nodes);
    })
  );*/
};
