import * as OSM from "./OSM/OSM.js";
import * as FS from "./Indexed/Indexed";
export const ProcessOSM = async (url) => {
  const db = await FS.Open("RoadMap", "nodes");
  const push = await FS.Put(db, { id: 0, message: "big moon" });
  const load = await FS.Get(db, 0);
  console.log(push);
  console.log(load);
  //const OSMXml = await OSM.LoadXMLRep(url);
  //console.log(OSMXml);
  /*

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
