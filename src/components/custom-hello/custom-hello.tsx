import { Component, Prop, h } from '@stencil/core';
import { capitalizeInitial } from '../../utils/utils';

@Component({
  tag: 'custom-hello',
  styleUrl: 'custom-hello.css',
  shadow: true,
})
export class CustomHello {
 
   @Prop() first: string;
   @Prop() middle: string;
   @Prop() last: string;
 
   get fullName(): string{
     let fullName = [];
     if(this.first) fullName.push(capitalizeInitial(this.first));
     if(this.middle) fullName.push(capitalizeInitial(this.middle));
     if(this.last) fullName.push(capitalizeInitial(this.last));
     return fullName.join(' ');
   }
   render() {
     // return <div>Hello, World! I'm {this.getText()}</div>;
     return <div>Hello, World! I'm {this.fullName}.</div>;
   }
}
