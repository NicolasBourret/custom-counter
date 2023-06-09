import { PubSub } from '../lib/pubsub.js';
import { createProxy } from './proxy.js';

export class Store {
   constructor(params) {
      this.actions = {};
      this.mutations = {};
      this.state = {};
      this.status = 'resting';

      this.events = new PubSub();

      if (params.hasOwnProperty('actions')) {
         this.actions = params.actions;
      }
      if (params.hasOwnProperty('mutations')) {
         this.mutations = params.mutations;
      }

      this.state = createProxy(params, this);
   }

   dispatch = (actionKey, payload) => {
      if (typeof this.actions[actionKey] !== 'function') {
         console.error(`Action "${actionKey} doesn't exist.`);
         return false;
      }

      console.groupCollapsed(`ACTION: ${actionKey}`);

      this.status = 'action';

      this.actions[actionKey](this, payload);

      console.groupEnd();

      return true;
   };

   commit = (mutationKey, payload) => {
      if (typeof this.mutations[mutationKey] !== 'function') {
         console.log(`Mutation ${mutationKey} doesn't exist.`);
         return false;
      }

      this.status = 'mutation';

      const newState = this.mutations[mutationKey](this.state, payload);

      this.state = Object.assign(this.state, newState);

      return true;
   };
}
