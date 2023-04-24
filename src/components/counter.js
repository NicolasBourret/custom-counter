import { Component } from '../lib/components.js';
import { counterState } from '../store/index.js';

export class Counter extends Component {
   constructor() {
      super({
         store: counterState,
         element: document.querySelector('#counter'),
      });
   }

   render = () => {
      this.element.innerHTML = `
    <button id="increase-button">Increase</button>
    <button id="decrease-button">Decrease</button>
    <p id="count-result">count: ${counterState.state.count}</p>
    `;

      this.element
         .querySelector('#increase-button')
         .addEventListener('click', () =>
            counterState.dispatch('increaseCount', counterState.state.count)
         );
      this.element
         .querySelector('#decrease-button')
         .addEventListener('click', () =>
            counterState.dispatch('decreaseCount', counterState.state.count)
         );
   };
}
