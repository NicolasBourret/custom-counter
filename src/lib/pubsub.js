export class PubSub {
  constructor() {
    this.events = {};
  }

  /**
   *
   * @param {number} event string, event's unique name
   * @param {callback} callback
   * @returns {number} length of the events collection
   */
  subscribe = (event, callback) => {
    let self = this;

    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }

    return self.events[event].push(callback);
  };

  publish = (event, data = {}) => {
    let self = this;

    if (!self.events.hasOwnProperty(event)) {
      return [];
    }

    return self.events[event].map((callback) => callback(data));
  };
}
