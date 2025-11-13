import { newSpecPage } from '@stencil/core/testing';
import { ButtonEvent } from '../button-event';

describe('button-event', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonEvent],
      html: `<button-event></button-event>`,
    });
    expect(page.root).toEqualHtml(`
      <button-event>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-event>
    `);
  });
});
