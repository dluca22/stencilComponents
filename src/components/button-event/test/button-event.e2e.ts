import { newE2EPage } from '@stencil/core/testing';

describe('button-event', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-event></button-event>');

    const element = await page.find('button-event');
    expect(element).toHaveClass('hydrated');
  });
});
