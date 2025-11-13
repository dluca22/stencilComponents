import { newSpecPage } from '@stencil/core/testing';
import { CustomHello } from '../custom-hello';

describe('custom-hello', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomHello],
      html: `<custom-hello></custom-hello>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-hello>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-hello>
    `);
  });
});
