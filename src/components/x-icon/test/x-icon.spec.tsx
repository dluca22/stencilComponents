import { newSpecPage } from '@stencil/core/testing';
import { XIcon } from '../x-icon';

describe('x-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XIcon],
      html: `<x-icon></x-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <x-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-icon>
    `);
  });
});
