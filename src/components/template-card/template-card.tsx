import { Component, Listen, Prop, State, h } from '@stencil/core';

import { capitalizeInitial, formatName } from '../../utils/utils';

@Component({
  tag: 'template-card',
  styleUrl: 'template-card.css',
  shadow: true,
})
export class TemplateCard {
  
  @Prop() first: string;
  @Prop() last: string;
  @Prop() job: string;
  @Prop() descriptionText: string;
  
  
  @Prop() accomplishments: number = 0;
  @Prop() age: number;
  @Prop() addComplementaryActions: boolean= false;

  @State() accomplishmentValue;

  // @Listen('countIncreased', { target: 'window' })// this can catch events from the global window like emitted from other sibling components
  @Listen('countIncreased')
  counterIncreased(event: CustomEvent<number>) {
    console.log('Received the counterIncreased  event: ', event.detail);
    this.accomplishmentValue = event.detail;
  }

  // componentDidLoad(){
  //   console.log('<template-card> loaded')
  // }

  componentWillLoad(){
    // console.log('<template-card> rendered');
    this.accomplishmentValue = this.accomplishments;
    console.log(`${this.first} is => `, this.addComplementaryActions)
    
  }

  get fullName(): string {
    return formatName(capitalizeInitial(this.first), capitalizeInitial(this.last));
  }

  render() {
    return (
      <>
        <div class="user-card">
          <header class="user-card__header">
            <div class="user-avatar">
              <slot name="avatar"></slot>
            </div>
            <div>
              <h2 class="user-card__name">{this.fullName}</h2>
              <p class="user-card__role">{this.job}</p>
            </div>
          </header>

          {this.descriptionText && (
            <div class="user-card__body">
              <p class="user-card__description">{this.descriptionText}</p>
            </div>
          )}

          <footer class="user-card__footer">
            <span class="user-card__meta">Age: {this.age || '--'}</span>
            <span class="user-card__meta">
              Accomplishments: {this.accomplishmentValue}
            </span>
          </footer>

        </div>
        {
        /* this button emits events scoped to this very card without other one catching it
          in contrast to when the event is sent to the parent and @Listen is set to target: window events
        */
          this.addComplementaryActions
            ? <button-event initialCount={this.accomplishmentValue}> +1 accomplishment!</button-event>
            : ''
        }
      </>
    );
  }
}
