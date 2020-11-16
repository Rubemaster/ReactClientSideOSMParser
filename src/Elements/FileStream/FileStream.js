import { SetupStream } from "./SAX/SetupStream.js";
import { AddTagListener } from "./SAX/AddTagListener.js";
import { StreamFile } from "./SAX/StreamFile.js";

export { LoadXMLRep } from "./LoadXMLRep.js";
export { Open } from "./Open.js";
export const SAX = {
  SetupStream: SetupStream,
  AddTagListener: AddTagListener,
  StreamFile: StreamFile
};
