import { newE2EPage } from '@stencil/core/testing';

describe('custom-hello', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-hello></custom-hello>');

    const element = await page.find('custom-hello');
    expect(element).toHaveClass('hydrated');
  });
});
