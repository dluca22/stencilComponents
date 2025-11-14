import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'button-event',
  styleUrl: 'button-event.css',
  shadow: true,
})
export class ButtonEvent {
  @Prop() initialCount: number;
  @State() counter: number = 0;

  /* make sure to include Event in the import apart from EventEmitter from @stencil/core !!!

  ---- alternate approach, use alias to avoid conflicts w/ global Event 
   import { Event as StencilEvent, EventEmitter } from '@stencil/core';
   @StencilEvent() myEvent: EventEmitter<{value: string, ev: Event}>; */
  @Event() countIncreased: EventEmitter<number>; // CANNOT be caught by sibling component

  handleClick = () => {
    this.counter = this.counter + 1;
    this.countIncreased.emit(this.counter);
  }

  // on first load if initial value is passed, assign that as state, otherwise restart from default
  componentWillLoad(){
    if(this.initialCount){
      this.counter = this.initialCount;
    }
    console.log('<button-event> rendered')
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        <slot></slot> {this.counter}
      </button>
    );
  }
}
