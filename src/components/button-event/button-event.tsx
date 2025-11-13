import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'button-event',
  styleUrl: 'button-event.css',
  shadow: true,
})
export class ButtonEvent {

  @State() counter: number = 0;

  private handleClick(){
    this.counter = this.counter +1;
    console.log('heee')

  }

  // componentDidLoad(){
  //   console.log('<button-event> loaded')
  // }

  // componentDidRender(){
  //   console.log('<button-event> rendered')
  // }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        <slot></slot> {this.counter}
      </button>
    );
  }
}
