import { Members } from "./Structures/Members";
import { Start, Advance } from "./Structures/Actions.js";
export class State {
  constructor() {
    this.members = Members;
    this.start = () =>
      (this.members.situation = {
        active: true,
        position: 0,
        lastFetch: -1
      });
    this.advance = {
      id: () => {
        return this.members.situation.position;
      },
      call: (lastFetch) => {
        if (this.members.situation.active) {
          this.members.situation.position++;
          if (lastFetch < 128) {
            this.members.situation.lastFetch = lastFetch;
            return true;
          } else {
            return false;
          }
        }
        return false;
      }
    };
  }
}
