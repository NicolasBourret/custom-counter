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
      if (!this.events.hasOwnProperty(event)) {
         this.events[event] = [];
      }

      return this.events[event].push(callback);
   };

   publish = (event, data = {}) => {
      if (!this.events.hasOwnProperty(event)) {
         return [];
      }

      return this.events[event].map((callback) => callback(data));
   };
}
