import React from "react";
import "./styles.css";
import { ProcessOSM } from "./Elements/ProcessOSM";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.map = React.createRef();
    this.state = { mapWidth: 400, mapHeight: 400 };
  }

  componentDidMount() {
    this.map.current.onchange = (e) => {
      console.log(this.map.current);
    };
    /*const loadFile = "map.osm";
    ProcessOSM(
      "https://rubenrick.online/resources/load_file.php?file_name=" + loadFile
    );

    /*fetch(
      "https://rubenrick.online/resources/load_file.php?file_name=" + loadFile
    ).then((response) =>
      response.text().then((text) => {
        /*let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(text, "text/xml");

        let nodes = {};
        Array.prototype.slice.call(xmlDoc.getElementsByTagName("node")).forEach(
          (x) =>
            (nodes[x.id] = {
              lat: x.getAttribute("lat"),
              lon: x.getAttribute("lon")
            })
        );
        let ways = {};
        Array.prototype.slice
          .call(xmlDoc.getElementsByTagName("way"))
          .forEach((currentWay, i) => {
            let wayTagArray = Array.prototype.slice
              .call(currentWay.childNodes)
              .filter((x, i) => i % 2);

            let obj = {};
            wayTagArray
              .filter((currentTag) => currentTag.nodeName === "tag")
              .forEach((x) => (obj[x.getAttribute("k")] = x.getAttribute("v")));
            obj["nodes"] = [];
            wayTagArray
              .filter((currentTag) => currentTag.nodeName === "nd")
              .forEach((x) => obj["nodes"].push(x.getAttribute("ref")));
            ways[currentWay.getAttribute("id")] = obj;
          });

        const bounds = xmlDoc.getElementsByTagName("bounds")[0];
        const minLat = bounds.getAttribute("minlat");
        const maxLat = bounds.getAttribute("maxlat");
        const minLon = bounds.getAttribute("minlon");
        const maxLon = bounds.getAttribute("maxlon");
        const allowedTypes = [
          "road",
          "raceway",
          "escape",
          "bus_guideway",
          "track",
          "pedestrian",
          "service",
          "living_street",
          "tertiary_link",
          "secondary_link",
          "primary_link",
          "trunk_link",
          "motorway_link",
          "residential",
          "unclassified",
          "tertiary",
          "secondary",
          "primary",
          "trunk",
          "motorway"
        ];
        for (let key in ways) {
          if (!allowedTypes.includes(ways[key].highway)) {
            delete ways[key];
          }
        }
        const yFac = (maxLat - minLat) / (maxLon - minLon);
        for (let key in nodes) {
          nodes[key] = {
            y: (parseFloat(nodes[key].lat) - minLat) * (1 / (maxLat - minLat)),
            x: (parseFloat(nodes[key].lon) - minLon) * (1 / (maxLon - minLon))
          };
        }
        const canvas = this.canvas.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        for (let key in ways) {
          let first = true;
          ways[key].nodes.forEach((node) => {
            if (first) {
              ctx.moveTo(
                nodes[node].x * this.state.mapWidth,
                (this.state.mapHeight - nodes[node].y * this.state.mapHeight) *
                  yFac
              );
              first = false;
            } else {
              ctx.lineTo(
                nodes[node].x * this.state.mapWidth,
                (this.state.mapHeight - nodes[node].y * this.state.mapHeight) *
                  yFac
              );
            }
          });
        }
        ctx.stroke();
        let nodeNetwork = {};
        for (let key in ways) {
          ways[key].nodes.forEach((node, i) => {
            let add = [];
            if (i < ways[key].nodes.length - 1) {
              add.push(ways[key].nodes[i + 1]);
            }
            if (i > 1) {
                add.push(ways[key].nodes[i - 1]);
            
            }
            nodeNetwork[node]
              ? add.forEach((connection) => {
                  if (!nodeNetwork[node].includes(connection)) {
                    nodeNetwork[node].push(connection);
                  }
                })
              : (nodeNetwork[node] = add);
          });
        }
        const randomAttribute = (object) => {
          let memberCount = 0;
          for (let attribute in object) {
            memberCount++;
          }
          let selected = Math.floor(Math.random() * memberCount);
          memberCount = 0;
          for (let attribute in object) {
            memberCount++;
            if (memberCount === selected) {
              return attribute;
            }
          }
        };
        let origin = 147277;

        let connections = {};
        connections[origin] = { checked: false, from: false, length: 0 };
        let allMapped = false;
        while (!allMapped) {
          allMapped = true;
          for (let key in connections) {
            if (!connections[key].checked) {
              allMapped = false;
              if (nodeNetwork[key]) {
                nodeNetwork[key].forEach((node) => {
                  const newLength = connections[key].length + 1;
                  if (
                    !connections[node] ||
                    connections[node].length > newLength
                  ) {
                    connections[node] = {
                      checked: false,
                      from: key,
                      length: newLength
                    };
                  }
                });
              }
              connections[key].checked = true;
            }
          }
        }
        console.log(connections);
        let to = 5536600081;
        let from = connections[to].from;
        let path = [];
        while (connections[from].from !== false) {
          path.push(from);
          from = connections[from].from;
        }

        ctx.beginPath();
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 1;
        let first = true;
        path.forEach((node) => {
          if (first) {
            ctx.moveTo(
              nodes[node].x * this.state.mapWidth,
              (this.state.mapHeight - nodes[node].y * this.state.mapHeight) *
                yFac
            );
            first = false;
          } else {
            ctx.lineTo(
              nodes[node].x * this.state.mapWidth,
              (this.state.mapHeight - nodes[node].y * this.state.mapHeight) *
                yFac
            );
          }
        });
        ctx.stroke();
      })
    );*/
  }
  render() {
    return (
      <div>
        <input ref={this.map} type="file" id="myFile" name="filename" />
        {/*<canvas
          ref={this.canvas}
          width={this.state.mapWidth}
          height={this.state.mapHeight}
        />*/}
      </div>
    );
  }
}
