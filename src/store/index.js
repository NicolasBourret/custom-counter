import { actions } from "./actions.js";
import { mutations } from "./mutations.js";
import { state } from "./state.js";
import { Store } from "./store.js";

export const counterState = new Store({
  actions,
  mutations,
  state,
});
