export const Start = () =>
  (this.members.situation = {
    active: true,
    position: 0,
    lastFetch: -1
  });
export const Advance = {
  Id: () => {
    return this.members.situation.position;
  },
  Call: (lastFetch) => {
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
