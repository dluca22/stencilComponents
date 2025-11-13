import { Component, Host, Prop, h } from '@stencil/core';
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
  @Prop() description: string;

  @Prop() accomplishments: number = 0;
  @Prop() age: number;


  // componentDidLoad(){
  //   console.log('<template-card> loaded')
  // }

  // componentDidRender(){
  //   console.log('<template-card> rendered')
  // }

  get fullName(): string {
    return formatName(capitalizeInitial(this.first), capitalizeInitial(this.last));
  }

  render() {
    return (
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

  {this.description && (
    <div class="user-card__body">
      <p class="user-card__description">{this.description}</p>
    </div>
  )}

  <footer class="user-card__footer">
    <span class="user-card__meta">Age: {this.age || '--'}</span>
    <span class="user-card__meta">
      Accomplishments: {this.accomplishments}
    </span>
  </footer>
</div>

    );
  }
}
