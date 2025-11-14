import { Component, Prop, State, h, Element as StencilElement } from '@stencil/core';

@Component({
  tag: 'status-badge',
  styleUrl: 'status-badge.css',
  shadow: true,
})



export class StatusBadge {
  @Prop() message:string;
  @Prop() status: 'info'|'success'|'warning'|'danger'|'critical'|'secondary' ;
  
  @Prop() persistent: boolean = false;
  @Prop() autoRemove: boolean = false;
  @Prop() ttl: number | undefined;

  @StencilElement() element: HTMLElement;

  @State() isDismissed: boolean = false;

  componentDidLoad(){
    if(this.autoRemove){
      setTimeout(() => {
        this.removeElement();
      }, (this.ttl || 10) * 1000);
    }
  }
  
  disconnectedCallback(){
    console.log("badge was removed ", this.message);
  }

  removeElement = () => {
  this.element.remove();
  }
  
  render() {
    return (
      <div class="badge">
        <span class={['badge-icon', this.status].join(' ')}>
          
        </span>
        <span class="badge-message">
          {this.message}
        </span>
        {
          this.persistent == false 
          ? <button onClick={this.removeElement} class="dismiss-btn">
              <x-icon/>
            </button>
          : ''
        }
      
      </div>
    );
  }
}
