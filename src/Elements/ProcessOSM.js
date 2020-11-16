//import * as OSM from "./OSM/OSM.js";
//import * as Indexed from "./Indexed/Indexed.js";
import * as FileStream from "./FileStream/FileStream.js";
export const ProcessOSM = async (MapRef) => {
  const stream = FileStream.SAX.SetupStream();
  //console.log(stream);
  FileStream.SAX.AddTagListener(stream);
  const MapFile = await FileStream.Open(MapRef);
  FileStream.SAX.StreamFile(MapFile, stream);
  const reader = MapFile.stream().getReader();
  reader.read().then(function processText({ done, value }) {
    console.log(value);
  });
  /*const db = await Indexed.Open("RoadMap", "nodes");
  const push = await Indexed.Put(db, { id: 0, message: "big moon" });
  const load = await Indexed.Get(db, 0);
  console.log(push);
  console.log(load);
  //const OSMXml = await FileStream.LoadXMLRep(url);
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
