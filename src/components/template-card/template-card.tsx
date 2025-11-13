import { Component, Prop, h } from '@stencil/core';
import { capitalizeInitial } from '../../utils/utils';

@Component({
  tag: 'template-card',
  styleUrl: 'template-card.css',
  shadow: true,
})
export class TemplateCard {

  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  get fullName(): string{
    let fullName = [];
    if(this.first) fullName.push(capitalizeInitial(this.first));
    if(this.middle) fullName.push(capitalizeInitial(this.middle));
    if(this.last) fullName.push(capitalizeInitial(this.last));
    return fullName.join(', ');
  }
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    // return <div>Hello, World! I'm {this.getText()}</div>;
    return <div>Hello, World! I'm {this.fullName}</div>;
  }
}
