export const actions = {
  increaseCount: (context, payload) => {
    console.log("payload action", payload);
    context.commit("increaseCount", payload);
  },
  decreaseCount: (context, payload) => {
    context.commit("decreaseCount", payload);
  },
};
