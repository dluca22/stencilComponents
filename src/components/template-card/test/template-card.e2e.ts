import { newE2EPage } from '@stencil/core/testing';

describe('template-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<template-card></template-card>');

    const element = await page.find('template-card');
    expect(element).toHaveClass('hydrated');
  });
});
