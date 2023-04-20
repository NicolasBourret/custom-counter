const proxyHandler = (self) => ({
  set: (state, key, value) => {
    state[key] = value;

    console.log("state change", key, value);

    self.events.publish("stateChange", self.state);

    if (self.status !== "mutation") {
      console.warn(`You should use a mutation to ${key}`);
    }

    self.status = "resting";

    return true;
  },
});

export const createProxy = (params, self) =>
  new Proxy(params.state || {}, proxyHandler(self));
