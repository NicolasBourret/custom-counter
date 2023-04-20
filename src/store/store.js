import { PubSub } from "../lib/pubsub.js";
import { createProxy } from "./proxy.js";

export class Store {
  constructor(params) {
    let self = this;

    self.actions = {};
    self.mutations = {};
    self.state = {};
    self.status = "resting";

    self.events = new PubSub();

    if (params.hasOwnProperty("actions")) {
      self.actions = params.actions;
    }
    if (params.hasOwnProperty("mutations")) {
      self.mutations = params.mutations;
    }

    self.state = createProxy(params, self);
  }

  dispatch = (actionKey, payload) => {
    let self = this;

    if (typeof self.actions[actionKey] !== "function") {
      console.error(`Action "${actionKey} doesn't exist.`);
      return false;
    }

    console.groupCollapsed(`ACTION: ${actionKey}`);

    self.status = "action";

    self.actions[actionKey](self, payload);

    console.groupEnd();

    return true;
  };

  commit = (mutationKey, payload) => {
    let self = this;

    if (typeof self.mutations[mutationKey] !== "function") {
      console.log(`Mutation ${mutationKey} doesn't exist.`);
      return false;
    }

    self.status = "mutation";

    const newState = self.mutations[mutationKey](self.state, payload);

    self.state = Object.assign(self.state, newState);

    return true;
  };
}
