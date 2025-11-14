import { newE2EPage } from '@stencil/core/testing';

describe('x-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-icon></x-icon>');

    const element = await page.find('x-icon');
    expect(element).toHaveClass('hydrated');
  });
});
