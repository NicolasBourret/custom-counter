import { decrease, increase } from "../utils/helpers.js";

export const mutations = {
  increaseCount: (state, payload) => {
    state.count = increase(payload);
    return state;
  },
  decreaseCount: (state, payload) => {
    state.count = decrease(payload);
    return state;
  },
};
