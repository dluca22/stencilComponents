import { newSpecPage } from '@stencil/core/testing';
import { StatusBadge } from '../status-badge';

describe('status-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StatusBadge],
      html: `<status-badge></status-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <status-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </status-badge>
    `);
  });
});
